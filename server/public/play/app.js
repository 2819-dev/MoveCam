var ac="169";var Xu=0,Hc=1,Ku=2;var Wh=1,oc=2,Nn=3,oi=0,Oe=1,Le=2,si=0,ri=1,ls=2,Vc=3,Gc=4,qu=5,Ti=100,Yu=101,$u=102,Zu=103,Ju=104,ju=200,Qu=201,td=202,ed=203,Do=204,No=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,Fo=0,Oo=1,Bo=2,cs=3,ko=4,zo=5,Ho=6,Vo=7,Xh=0,ud=1,dd=2,ai=0,fd=1,pd=2,md=3,lc=4,gd=5,_d=6,vd=7;var Kh=300,hs=301,us=302,Go=303,Wo=304,Ea=306,Pi=1e3,Ri=1001,Xo=1002,sn=1003,xd=1004;var mr=1005;var pn=1006,ja=1007;var Ci=1008;var zn=1009,qh=1010,Yh=1011,Zs=1012,cc=1013,Ii=1014,On=1015,nr=1016,hc=1017,uc=1018,ds=1020,$h=35902,Zh=1021,Jh=1022,gn=1023,jh=1024,Qh=1025,rs=1026,fs=1027,tu=1028,dc=1029,eu=1030,fc=1031;var pc=1033,Gr=33776,Wr=33777,Xr=33778,Kr=33779,Ko=35840,qo=35841,Yo=35842,$o=35843,Zo=36196,Jo=37492,jo=37496,Qo=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,qr=36492,fl=36494,pl=36495,nu=36283,ml=36284,gl=36285,_l=36286;var $r=2300,vl=2301,Qa=2302,Wc=2400,Xc=2401,Kc=2402;var yd=3200,Md=3201;var iu=0,Sd=1,ni="",Fe="srgb",di="srgb-linear",mc="display-p3",Ta="display-p3-linear",Zr="linear",ue="srgb",Jr="rec709",jr="p3";var zi=7680;var qc=519,bd=512,wd=513,Ed=514,su=515,Td=516,Ad=517,Rd=518,Cd=519,xl=35044;var Yc="300 es",Bn=2e3,Qr=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=1234567,Xs=Math.PI/180,ps=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function Pd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Id(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function Ld(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function Ud(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function Dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Fd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Od(i,t){return i+Math.random()*(t-i)}function Bd(i){return i*(.5-Math.random())}function kd(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zd(i){return i*Xs}function Hd(i){return i*ps}function Vd(i){return(i&i-1)===0&&i!==0}function Gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ru={DEG2RAD:Xs,RAD2DEG:ps,generateUUID:kn,clamp:Ce,euclideanModulo:gc,mapLinear:Pd,inverseLerp:Id,lerp:Ks,damp:Ld,pingpong:Ud,smoothstep:Dd,smootherstep:Nd,randInt:Fd,randFloat:Od,randFloatSpread:Bd,seededRandom:kd,degToRad:zd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:ee,denormalize:mn},st=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],C=s[2],E=s[5],T=s[8];return r[0]=a*v+o*S+l*C,r[3]=a*m+o*y+l*E,r[6]=a*p+o*x+l*T,r[1]=c*v+h*S+u*C,r[4]=c*m+h*y+u*E,r[7]=c*p+h*x+u*T,r[2]=d*v+f*S+g*C,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ot;function au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=ta("canvas");return i.style.display="block",i}var Zc={};function Yr(i){i in Zc||(Zc[i]=!0,console.warn(i))}function qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $d(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jc=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jc=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[di]:{transfer:Zr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:ue,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ta]:{transfer:Zr,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(jc),fromReference:i=>i.applyMatrix3(Jc)},[mc]:{transfer:ue,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(jc),fromReference:i=>i.applyMatrix3(Jc).convertLinearToSRGB()}},Zd=new Set([di,Ta]),Jt={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ns[t].toReference,s=Ns[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ns[i].primaries},getTransfer:function(i){return i===ni?Zr:Ns[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ns[t].luminanceCoefficients)}};function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=ta("canvas")),Hi.width=t.width,Hi.height=t.height;let n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=as(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jd=0,je=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ri,s=Ri,r=pn,a=Ci,o=gn,l=zn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=kn(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Kh;je.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,C=(p+1)/2,E=(h+d)/4,T=(u+v)/4,P=(g+m)/4;return y>x&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=T/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},na=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*v,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),E=Math.atan2(C,p*S);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}let x=o*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new R,Qc=new ci,Li=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),_r.subVectors(this.max,Fs),Vi.subVectors(t.a,Fs),Gi.subVectors(t.b,Fs),Wi.subVectors(t.c,Fs),Zn.subVectors(Gi,Vi),Jn.subVectors(Wi,Gi),xi.subVectors(Vi,Wi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-xi.y,xi.x,0];return!so(e,Vi,Gi,Wi,_r)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Vi,Gi,Wi,_r))?!1:(vr.crossVectors(Zn,Jn),e=[vr.x,vr.y,vr.z],so(e,Vi,Gi,Wi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,gr=new Li,Vi=new R,Gi=new R,Wi=new R,Zn=new R,Jn=new R,xi=new R,Fs=new R,_r=new R,vr=new R,yi=new R;function so(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qd=new Li,Os=new R,ro=new R,ms=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(ro)),this.expandByPoint(Os.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new R,ao=new R,xr=new R,jn=new R,oo=new R,yr=new R,lo=new R,ia=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=jn.dot(this.direction),l=-jn.dot(xr),c=jn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ao).addScaledVector(xr,d),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),yr.subVectors(n,t),lo.crossVectors(oo,yr);let a=this.direction.dot(lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);let l=o*this.direction.dot(yr.crossVectors(jn,yr));if(l<0)return null;let c=o*this.direction.dot(oo.cross(jn));if(c<0||l+c>a)return null;let h=-o*jn.dot(lo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Qn.crossVectors(n,Ze),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Qn.crossVectors(n,Ze)),Qn.normalize(),Mr.crossVectors(Ze,Qn),s[0]=Qn.x,s[4]=Mr.x,s[8]=Ze.x,s[1]=Qn.y,s[5]=Mr.y,s[9]=Ze.y,s[2]=Qn.z,s[6]=Mr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],C=n[15],E=s[0],T=s[4],P=s[8],z=s[12],_=s[1],w=s[5],N=s[9],k=s[13],V=s[2],Z=s[6],H=s[10],et=s[14],W=s[3],dt=s[7],ft=s[11],Mt=s[15];return r[0]=a*E+o*_+l*V+c*W,r[4]=a*T+o*w+l*Z+c*dt,r[8]=a*P+o*N+l*H+c*ft,r[12]=a*z+o*k+l*et+c*Mt,r[1]=h*E+u*_+d*V+f*W,r[5]=h*T+u*w+d*Z+f*dt,r[9]=h*P+u*N+d*H+f*ft,r[13]=h*z+u*k+d*et+f*Mt,r[2]=g*E+v*_+m*V+p*W,r[6]=g*T+v*w+m*Z+p*dt,r[10]=g*P+v*N+m*H+p*ft,r[14]=g*z+v*k+m*et+p*Mt,r[3]=S*E+y*_+x*V+C*W,r[7]=S*T+y*w+x*Z+C*dt,r[11]=S*P+y*N+x*H+C*ft,r[15]=S*z+y*k+x*et+C*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,C=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,E=e*S+n*y+s*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=S*T,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,t[4]=y*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*T,t[8]=x*T,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*T,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=C*T,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,S=l*c,y=l*h,x=l*u,C=n.x,E=n.y,T=n.z;return s[0]=(1-(v+p))*C,s[1]=(f+x)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+y)*T,s[9]=(m-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);let c=1/r,h=1/a,u=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Bn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,v;if(o===Bn)g=(a+r)*u,v=-2*u;else if(o===Qr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new R,dn=new de,tf=new R(0,0,0),ef=new R(1,1,1),Qn=new R,Mr=new R,Ze=new R,th=new de,eh=new ci,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,nh=new R,Ki=new ci,Ln=new de,Sr=new R,Bs=new R,sf=new R,rf=new ci,ih=new R(1,0,0),sh=new R(0,1,0),rh=new R(0,0,1),ah={type:"added"},af={type:"removed"},qi={type:"childadded",child:null},co={type:"childremoved",child:null},Me=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new wn,n=new ci,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ot}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Bs,Sr,this.up):Ln.lookAt(Sr,Bs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new R,Un=new R,ho=new R,Dn=new R,Yi=new R,$i=new R,oh=new R,uo=new R,fo=new R,po=new R,mo=new se,go=new se,_o=new se,ii=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Un.subVectors(n,e),ho.subVectors(t,e);let a=fn.dot(fn),o=fn.dot(Un),l=fn.dot(ho),c=Un.dot(Un),h=Un.dot(ho),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),$i.subVectors(r,n),uo.subVectors(t,n);let l=Yi.dot(uo),c=$i.dot(uo);if(l<=0&&c<=0)return e.copy(n);fo.subVectors(t,s);let h=Yi.dot(fo),u=$i.dot(fo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Yi,a);po.subVectors(t,r);let f=Yi.dot(po),g=$i.dot(po);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector($i,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return oh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(oh,o);let p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Yi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},br={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=gc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Jt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ce(Ne.r*255,0,255))*65536+Math.round(Ce(Ne.g*255,0,255))*256+Math.round(Ce(Ne.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Fe){Jt.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(br);let n=Ks(ti.h,br.h,e),s=Ks(ti.s,br.s,e),r=Ks(ti.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Et;Et.NAMES=ou;var of=0,Vn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ri,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Se=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new R,wr=new st,ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}};var ra=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var aa=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},lf=0,nn=new de,xo=new Me,Zi=new R,Je=new Li,ks=new Li,Re=new R,_e=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?aa:ra)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Je.min,ks.min),Je.expandByPoint(Re),Re.addVectors(Je.max,ks.max),Je.expandByPoint(Re)):(Je.expandByPoint(ks.min),Je.expandByPoint(ks.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),Re.add(Zi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;let c=new R,h=new R,u=new R,d=new st,f=new st,g=new st,v=new R,m=new R;function p(P,z,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,z),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(v),o[z].add(v),o[_].add(v),l[P].add(m),l[z].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,z=S.length;P<z;++P){let _=S[P],w=_.start,N=_.count;for(let k=w,V=w+N;k<V;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new R,x=new R,C=new R,E=new R;function T(P){C.fromBufferAttribute(s,P),E.copy(C);let z=o[P];y.copy(z),y.sub(C.multiplyScalar(C.dot(z))).normalize(),x.crossVectors(E,z);let w=x.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,w)}for(let P=0,z=S.length;P<z;++P){let _=S[P],w=_.start,N=_.count;for(let k=w,V=w+N;k<V;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lh=new de,Mi=new ia,Er=new ms,ch=new R,Tr=new R,Ar=new R,Rr=new R,yo=new R,Cr=new R,hh=new R,Pr=new R,re=class extends Me{constructor(t=new _e,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yo.fromBufferAttribute(u,t),a?Cr.addScaledVector(yo,h):Cr.addScaledVector(yo.sub(e),h))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Er.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Er,ch)===null||Mi.origin.distanceToSquared(ch)>(t.far-t.near)**2))&&(lh.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,C=y;x<C;x+=3){let E=o.getX(x),T=o.getX(x+1),P=o.getX(x+2);s=Ir(this,p,t,n,c,h,u,E,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Ir(this,a,t,n,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,C=y;x<C;x+=3){let E=x,T=x+1,P=x+2;s=Ir(this,p,t,n,c,h,u,E,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,y=m+1,x=m+2;s=Ir(this,a,t,n,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function cf(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:i}}function Ir(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Tr),i.getVertexPosition(l,Ar),i.getVertexPosition(c,Rr);let h=cf(i,t,e,n,Tr,Ar,Rr,hh);if(h){let u=new R;ii.getBarycoord(hh,Tr,Ar,Rr,u),s&&(h.uv=ii.getInterpolatedAttribute(s,o,l,c,u,new st)),r&&(h.uv1=ii.getInterpolatedAttribute(r,o,l,c,u,new st)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};ii.getNormal(Tr,Ar,Rr,d.normal),h.face=d,h.barycoord=u}return h}var pe=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(v,m,p,S,y,x,C,E,T,P,z){let _=x/T,w=C/P,N=x/2,k=C/2,V=E/2,Z=T+1,H=P+1,et=0,W=0,dt=new R;for(let ft=0;ft<H;ft++){let Mt=ft*w-k;for(let qt=0;qt<Z;qt++){let Qt=qt*_-N;dt[v]=Qt*S,dt[m]=Mt*y,dt[p]=V,c.push(dt.x,dt.y,dt.z),dt[v]=0,dt[m]=0,dt[p]=E>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(qt/T),u.push(1-ft/P),et+=1}}for(let ft=0;ft<P;ft++)for(let Mt=0;Mt<T;Mt++){let qt=d+Mt+Z*ft,Qt=d+Mt+Z*(ft+1),K=d+(Mt+1)+Z*(ft+1),Q=d+(Mt+1)+Z*ft;l.push(qt,Qt,Q),l.push(Qt,K,Q),W+=6}o.addGroup(f,W,z),f+=W,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function hf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var uf={clone:gs,merge:He},df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oa=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new R,uh=new st,dh=new st,Ie=class extends oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,uh,dh),e.subVectors(dh,uh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,ji=1,bl=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Ji,ji,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Ji,ji,t,e);r.layers=this.layers,this.add(r);let a=new Ie(Ji,ji,t,e);a.layers=this.layers,this.add(a);let o=new Ie(Ji,ji,t,e);o.layers=this.layers,this.add(o);let l=new Ie(Ji,ji,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Ji,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},la=class extends je{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wl=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new la(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:si});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=pn),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Mo=new R,pf=new R,mf=new Ot,Fn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Mo.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mf.getNormalMatrix(t),s=this.coplanarPoint(Mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new ms,Lr=new R,Js=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+S).normalize(),n[3].setComponents(l-a,d-h,m-g,x-S).normalize(),n[4].setComponents(l-o,d-u,m-v,x-y).normalize(),e===Bn)n[5].setComponents(l+o,d+u,m+v,x+y).normalize();else if(e===Qr)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ae=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-S,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let y=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),E=S+1+c*p;f.push(y,x,E),f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`
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
}`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,zm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:_f,alphahash_pars_fragment:vf,alphamap_fragment:xf,alphamap_pars_fragment:yf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:wf,batching_pars_vertex:Ef,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:If,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Nf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:kf,common:zf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Kf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:$f,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:cp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Sp,map_fragment:bp,map_pars_fragment:wp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Pp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Lp,morphtarget_vertex:Up,normal_fragment_begin:Dp,normal_fragment_maps:Np,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Gp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:Kp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:$p,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:vm,backgroundCube_frag:xm,cube_vert:ym,cube_frag:Mm,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Im,meshlambert_vert:Lm,meshlambert_frag:Um,meshmatcap_vert:Dm,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:km,meshphysical_vert:zm,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Gm,points_vert:Wm,points_frag:Xm,shadow_vert:Km,shadow_frag:qm,sprite_vert:Ym,sprite_frag:$m},it={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},bn={basic:{uniforms:He([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:He([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:He([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:He([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:He([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:He([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:He([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:He([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:He([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:He([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:He([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:He([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:He([it.lights,it.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};bn.physical={uniforms:He([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Ur={r:0,b:0,g:0},bi=new wn,Zm=new de;function Jm(i,t,e,n,s,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function v(S){let y=!1,x=g(S);x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===Ea)?(h===void 0&&(h=new re(new pe(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:gs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(y.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(bi)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ue,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new re(new ae(2,2),new rn({name:"BackgroundMaterial",uniforms:gs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Ur,lu(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function jm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,w,N,k,V){let Z=!1,H=u(k,N,w);r!==H&&(r=H,c(r.object)),Z=f(_,k,N,V),Z&&g(_,k,N,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(_,w,N,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,N){let k=N.wireframe===!0,V=n[_.id];V===void 0&&(V={},n[_.id]=V);let Z=V[w.id];Z===void 0&&(Z={},V[w.id]=Z);let H=Z[k];return H===void 0&&(H=d(l()),Z[k]=H),H}function d(_){let w=[],N=[],k=[];for(let V=0;V<e;V++)w[V]=0,N[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:k,object:_,attributes:{},index:null}}function f(_,w,N,k){let V=r.attributes,Z=w.attributes,H=0,et=N.getAttributes();for(let W in et)if(et[W].location>=0){let ft=V[W],Mt=Z[W];if(Mt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor)),ft===void 0||ft.attribute!==Mt||Mt&&ft.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(_,w,N,k){let V={},Z=w.attributes,H=0,et=N.getAttributes();for(let W in et)if(et[W].location>=0){let ft=Z[W];ft===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor));let Mt={};Mt.attribute=ft,ft&&ft.data&&(Mt.data=ft.data),V[W]=Mt,H++}r.attributes=V,r.attributesNum=H,r.index=k}function v(){let _=r.newAttributes;for(let w=0,N=_.length;w<N;w++)_[w]=0}function m(_){p(_,0)}function p(_,w){let N=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;N[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),V[_]!==w&&(i.vertexAttribDivisor(_,w),V[_]=w)}function S(){let _=r.newAttributes,w=r.enabledAttributes;for(let N=0,k=w.length;N<k;N++)w[N]!==_[N]&&(i.disableVertexAttribArray(N),w[N]=0)}function y(_,w,N,k,V,Z,H){H===!0?i.vertexAttribIPointer(_,w,N,V,Z):i.vertexAttribPointer(_,w,N,k,V,Z)}function x(_,w,N,k){v();let V=k.attributes,Z=N.getAttributes(),H=w.defaultAttributeValues;for(let et in Z){let W=Z[et];if(W.location>=0){let dt=V[et];if(dt===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),dt!==void 0){let ft=dt.normalized,Mt=dt.itemSize,qt=t.get(dt);if(qt===void 0)continue;let Qt=qt.buffer,K=qt.type,Q=qt.bytesPerElement,xt=K===i.INT||K===i.UNSIGNED_INT||dt.gpuType===cc;if(dt.isInterleavedBufferAttribute){let pt=dt.data,Dt=pt.stride,At=dt.offset;if(pt.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)p(W.location+zt,pt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let zt=0;zt<W.locationSize;zt++)m(W.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let zt=0;zt<W.locationSize;zt++)y(W.location+zt,Mt/W.locationSize,K,ft,Dt*Q,(At+Mt/W.locationSize*zt)*Q,xt)}else{if(dt.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt,dt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt,Mt/W.locationSize,K,ft,Mt*Q,Mt/W.locationSize*pt*Q,xt)}}else if(H!==void 0){let ft=H[et];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}S()}function C(){P();for(let _ in n){let w=n[_];for(let N in w){let k=w[N];for(let V in k)h(k[V].object),delete k[V];delete w[N]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let N in w){let k=w[N];for(let V in k)h(k[V].object),delete k[V];delete w[N]}delete n[_.id]}function T(_){for(let w in n){let N=n[w];if(N[_.id]===void 0)continue;let k=N[_.id];for(let V in k)h(k[V].object),delete k[V];delete N[_.id]}}function P(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Qm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function t0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let P=T===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==On&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function e0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,y=S*4,x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let C=0;C!==y;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function n0(i){let t=new WeakMap;function e(a,o){return o===Go?a.mapping=hs:o===Wo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Go||o===Wo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new wl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ca=class extends oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=4,fh=[.125,.215,.35,.446,.526,.582],Ai=20,So=new ca,ph=new Et,bo=null,wo=0,Eo=0,To=!1,Ei=(1+Math.sqrt(5))/2,Qi=1/Ei,mh=[new R(-Ei,Qi,0),new R(Ei,Qi,0),new R(-Qi,0,Ei),new R(Qi,0,Ei),new R(0,Ei,-Qi),new R(0,Ei,Qi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){bo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,wo,Eo),this._renderer.xr.enabled=To,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:nr,format:gn,colorSpace:di,depthBuffer:!1},s=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i0(r)),this._blurMaterial=s0(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s){let o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ph),h.toneMapping=ai,h.autoClear=!1;let f=new Se({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new re(new pe,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(ph),v=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;Dr(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,So)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mh[(s-r-1)%mh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let p=[],S=0;for(let T=0;T<Ai;++T){let P=T/v,z=Math.exp(-P*P/2);p.push(z),T===0?S+=z:T<m&&(S+=2*z)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let x=this._sizeLods[s],C=3*x*(s>y-ss?s-y+ss:0),E=4*(this._cubeSize-x);Dr(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(u,So)}};function i0(i){let t=[],e=[],n=[],s=i,r=i-ss+1+fh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ss?l=fh[a-i+ss-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,P=E>2?0:-1,z=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];S.set(z,v*g*E),y.set(d,m*g*E);let _=[E,E,E,E,E,E];x.set(_,p*g*E)}let C=new _e;C.setAttribute("position",new ye(S,v)),C.setAttribute("uv",new ye(y,m)),C.setAttribute("faceIndex",new ye(x,p)),t.push(C),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gh(i,t,e){let n=new Hn(i,t,e);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function s0(i,t,e){let n=new Float32Array(Ai),s=new R(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_c(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function _h(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function vh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function r0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Go||l===Wo,h=l===hs||l===us;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ha(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ha(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function a0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function o0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let S=f.array;v=f.version;for(let y=0,x=S.length;y<x;y+=3){let C=S[y+0],E=S[y+1],T=S[y+2];d.push(C,E,E,T,T,C)}}else if(g!==void 0){let S=g.array;v=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){let C=y+0,E=y+1,T=y+2;d.push(C,E,E,T,T,C)}}else return;let m=new(au(d)?aa:ra)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function l0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S];for(let S=0;S<v.length;S++)e.update(p,n,v[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function c0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function h0(i,t,e){let n=new WeakMap,s=new se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let z=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=o.attributes.position.count*y,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*C*4*u),T=new na(E,x,C,u);T.type=On,T.needsUpdate=!0;let P=y*4;for(let _=0;_<u;_++){let w=m[_],N=p[_],k=S[_],V=x*C*4*_;for(let Z=0;Z<w.count;Z++){let H=Z*P;f===!0&&(s.fromBufferAttribute(w,Z),E[V+H+0]=s.x,E[V+H+1]=s.y,E[V+H+2]=s.z,E[V+H+3]=0),g===!0&&(s.fromBufferAttribute(N,Z),E[V+H+4]=s.x,E[V+H+5]=s.y,E[V+H+6]=s.z,E[V+H+7]=0),v===!0&&(s.fromBufferAttribute(k,Z),E[V+H+8]=s.x,E[V+H+9]=s.y,E[V+H+10]=s.z,E[V+H+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new st(x,C)},n.set(o,d),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function u0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ua=class extends je{constructor(t,e,n,s,r,a,o,l,c,h=rs){if(h!==rs&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Ii),n===void 0&&h===fs&&(n=ds),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hu=new je,xh=new ua(1,1),uu=new na,du=new Sl,fu=new la,yh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Aa(i,t){let e=Mh[t];e===void 0&&(e=new Int32Array(t),Mh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function d0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),we(e,n)}}function _0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),we(e,n)}}function v0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),we(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function b0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=su,r=xh):r=hu,e.setTexture2D(t||r,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||du,s)}function C0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fu,s)}function P0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uu,s)}function I0(i){switch(i){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return w0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(i,t){i.uniform1fv(this.addr,t)}function U0(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function D0(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function N0(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function F0(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function O0(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function B0(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k0(i,t){i.uniform1iv(this.addr,t)}function z0(i,t){i.uniform2iv(this.addr,t)}function H0(i,t){i.uniform3iv(this.addr,t)}function V0(i,t){i.uniform4iv(this.addr,t)}function G0(i,t){i.uniform1uiv(this.addr,t)}function W0(i,t){i.uniform2uiv(this.addr,t)}function X0(i,t){i.uniform3uiv(this.addr,t)}function K0(i,t){i.uniform4uiv(this.addr,t)}function q0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||hu,r[a])}function Y0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||du,r[a])}function $0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fu,r[a])}function Z0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uu,r[a])}function J0(i){switch(i){case 5126:return L0;case 35664:return U0;case 35665:return D0;case 35666:return N0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=I0(e.type)}},Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function Eh(i,t){i.seq.push(t),i.map[t.id]=t}function j0(i,t,e){let n=i.name,s=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),a=Ao.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Eh(e,c===void 0?new El(o,i,t):new Tl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Al(o),Eh(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);j0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Th(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Q0=37297,tg=0;function eg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function ng(i){let t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i),n;switch(t===e?n="":t===jr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===jr&&(n="LinearSRGBToLinearDisplayP3"),i){case di:case Ta:return[n,"LinearTransferOETF"];case Fe:case mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ah(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(t),a)}else return s}function ig(i,t){let e=ng(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sg(i,t){let e;switch(t){case fd:e="Linear";break;case pd:e="Reinhard";break;case md:e="Cineon";break;case lc:e="ACESFilmic";break;case _d:e="AgX";break;case vd:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nr=new R;function rg(){Jt.getLuminanceCoefficients(Nr);let i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ws(i){return i!==""}function Rh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(cg,ug)}var hg=new Map;function ug(i,t){let e=Ft[t];if(e===void 0){let n=hg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(dg,fg)}function fg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case Ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xh:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function vg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=pg(e),c=mg(e),h=gg(e),u=_g(e),d=vg(e),f=ag(e),g=og(r),v=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Ft.tonemapping_pars_fragment:"",e.toneMapping!==ai?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),a=Rl(a),a=Rh(a,e),a=Ch(a,e),o=Rl(o),o=Rh(o,e),o=Ch(o,e),a=Ph(a),o=Ph(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+a,x=S+p+o,C=Th(s,s.VERTEX_SHADER,y),E=Th(s,s.FRAGMENT_SHADER,x);s.attachShader(v,C),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(w){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(E).trim(),Z=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,E);else{let et=Ah(s,C,"vertex"),W=Ah(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+et+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||V==="")&&(H=!1);H&&(w.diagnostics={runnable:Z,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(C),s.deleteShader(E),P=new os(s,v),z=lg(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let z;this.getAttributes=function(){return z===void 0&&T(this),z};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Q0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}var yg=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function Mg(i,t,e,n,s,r,a){let o=new sa,l=new Cl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,N,k,V){let Z=k.fog,H=V.geometry,et=_.isMeshStandardMaterial?k.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||et),dt=W&&W.mapping===Ea?W.image.height:null,ft=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=Mt!==void 0?Mt.length:0,Qt=0;H.morphAttributes.position!==void 0&&(Qt=1),H.morphAttributes.normal!==void 0&&(Qt=2),H.morphAttributes.color!==void 0&&(Qt=3);let K,Q,xt,pt;if(ft){let Ge=bn[ft];K=Ge.vertexShader,Q=Ge.fragmentShader}else K=_.vertexShader,Q=_.fragmentShader,l.update(_),xt=l.getVertexShaderID(_),pt=l.getFragmentShaderID(_);let Dt=i.getRenderTarget(),At=V.isInstancedMesh===!0,zt=V.isBatchedMesh===!0,ie=!!_.map,Ht=!!_.matcap,I=!!W,qe=!!_.aoMap,Bt=!!_.lightMap,Wt=!!_.bumpMap,Ct=!!_.normalMap,ce=!!_.displacementMap,Ut=!!_.emissiveMap,A=!!_.metalnessMap,M=!!_.roughnessMap,F=_.anisotropy>0,Y=_.clearcoat>0,j=_.dispersion>0,q=_.iridescence>0,St=_.sheen>0,rt=_.transmission>0,mt=F&&!!_.anisotropyMap,Xt=Y&&!!_.clearcoatMap,tt=Y&&!!_.clearcoatNormalMap,gt=Y&&!!_.clearcoatRoughnessMap,Pt=q&&!!_.iridescenceMap,It=q&&!!_.iridescenceThicknessMap,_t=St&&!!_.sheenColorMap,kt=St&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,le=!!_.specularColorMap,L=!!_.specularIntensityMap,ht=rt&&!!_.transmissionMap,G=rt&&!!_.thicknessMap,$=!!_.gradientMap,lt=!!_.alphaMap,ut=_.alphaTest>0,Vt=!!_.alphaHash,ve=!!_.extensions,Ve=ai;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Yt={shaderID:ft,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:Q,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:zt,batchingColor:zt&&V._colorsTexture!==null,instancing:At,instancingColor:At&&V.instanceColor!==null,instancingMorph:At&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:di,alphaToCoverage:!!_.alphaToCoverage,map:ie,matcap:Ht,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:dt,aoMap:qe,lightMap:Bt,bumpMap:Wt,normalMap:Ct,displacementMap:f&&ce,emissiveMap:Ut,normalMapObjectSpace:Ct&&_.normalMapType===Sd,normalMapTangentSpace:Ct&&_.normalMapType===iu,metalnessMap:A,roughnessMap:M,anisotropy:F,anisotropyMap:mt,clearcoat:Y,clearcoatMap:Xt,clearcoatNormalMap:tt,clearcoatRoughnessMap:gt,dispersion:j,iridescence:q,iridescenceMap:Pt,iridescenceThicknessMap:It,sheen:St,sheenColorMap:_t,sheenRoughnessMap:kt,specularMap:Nt,specularColorMap:le,specularIntensityMap:L,transmission:rt,transmissionMap:ht,thicknessMap:G,gradientMap:$,opaque:_.transparent===!1&&_.blending===ri&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:Vt,combine:_.combine,mapUv:ie&&m(_.map.channel),aoMapUv:qe&&m(_.aoMap.channel),lightMapUv:Bt&&m(_.lightMap.channel),bumpMapUv:Wt&&m(_.bumpMap.channel),normalMapUv:Ct&&m(_.normalMap.channel),displacementMapUv:ce&&m(_.displacementMap.channel),emissiveMapUv:Ut&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:M&&m(_.roughnessMap.channel),anisotropyMapUv:mt&&m(_.anisotropyMap.channel),clearcoatMapUv:Xt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:It&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(_.sheenRoughnessMap.channel),specularMapUv:Nt&&m(_.specularMap.channel),specularColorMapUv:le&&m(_.specularColorMap.channel),specularIntensityMapUv:L&&m(_.specularIntensityMap.channel),transmissionMapUv:ht&&m(_.transmissionMap.channel),thicknessMapUv:G&&m(_.thicknessMap.channel),alphaMapUv:lt&&m(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ct||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(ie||lt),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Qt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ie&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Le,flipSided:_.side===Oe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function S(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)w.push(N),w.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(y(w,_),x(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function y(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){let w=v[_.type],N;if(w){let k=bn[w];N=uf.clone(k.uniforms)}else N=_.uniforms;return N}function E(_,w){let N;for(let k=0,V=h.length;k<V;k++){let Z=h[k];if(Z.cacheKey===w){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new xg(i,w,_,r),h.push(N)),N}function T(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:C,acquireProgram:E,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:z}}function Sg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||bg),n.length>1&&n.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ag=0;function Rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cg(i){let t=new Eg,e=Tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new de,a=new de;function o(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,y=0,x=0,C=0,E=0,T=0;c.sort(Rg);for(let z=0,_=c.length;z<_;z++){let w=c[z],N=w.color,k=w.intensity,V=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*k,u+=N.g*k,d+=N.b*k;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],k);T++}else if(w.isDirectionalLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let et=w.shadow,W=e.get(w);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=w.shadow.matrix,S++}n.directional[f]=H,f++}else if(w.isSpotLight){let H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(N).multiplyScalar(k),H.distance=V,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[v]=H;let et=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,et.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=et.matrix,w.castShadow){let W=e.get(w);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=Z,x++}v++}else if(w.isRectAreaLight){let H=t.get(w);H.color.copy(N).multiplyScalar(k),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=H,m++}else if(w.isPointLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let et=w.shadow,W=e.get(w);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,W.shadowCameraNear=et.camera.near,W.shadowCameraFar=et.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=H,g++}else if(w.isHemisphereLight){let H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(k),H.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=T,n.version=Ag++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Dh(i){let t=new Cg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dh(i),t.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Il=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
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
}`;function Ug(i,t,e){let n=new Js,s=new st,r=new st,a=new se,o=new Il({depthPacking:Md}),l=new Ll,c={},h=e.maxTextureSize,u={[oi]:Oe,[Oe]:oi,[Le]:Le},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Ig,fragmentShader:Lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let p=this.type;this.render=function(E,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let z=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=p!==Nn&&this.type===Nn,V=p===Nn&&this.type!==Nn;for(let Z=0,H=E.length;Z<H;Z++){let et=E[Z],W=et.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let dt=W.getFrameExtents();if(s.multiply(dt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,W.mapSize.y=r.y)),W.map===null||k===!0||V===!0){let Mt=this.type!==Nn?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new Hn(s.x,s.y,Mt),W.map.texture.name=et.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ft=W.getViewportCount();for(let Mt=0;Mt<ft;Mt++){let qt=W.getViewport(Mt);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),N.viewport(a),W.updateMatrices(et,Mt),n=W.getFrustum(),x(T,P,W.camera,et,this.type)}W.isPointLightShadow!==!0&&this.type===Nn&&S(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(z,_,w)};function S(E,T){let P=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,P,f,v,null)}function y(E,T,P,z){let _=null,w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=_.uuid,k=T.uuid,V=c[N];V===void 0&&(V={},c[N]=V);let Z=V[k];Z===void 0&&(Z=_.clone(),V[k]=Z,T.addEventListener("dispose",C)),_=Z}if(_.visible=T.visible,_.wireframe=T.wireframe,z===Nn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=i.properties.get(_);N.light=P}return _}function x(E,T,P,z,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let k=t.update(E),V=E.material;if(Array.isArray(V)){let Z=k.groups;for(let H=0,et=Z.length;H<et;H++){let W=Z[H],dt=V[W.materialIndex];if(dt&&dt.visible){let ft=y(E,dt,z,_);E.onBeforeShadow(i,E,T,P,k,ft,W),i.renderBufferDirect(P,null,k,ft,E,W),E.onAfterShadow(i,E,T,P,k,ft,W)}}}else if(V.visible){let Z=y(E,V,z,_);E.onBeforeShadow(i,E,T,P,k,Z,null),i.renderBufferDirect(P,null,k,Z,E,null),E.onAfterShadow(i,E,T,P,k,Z,null)}}let N=E.children;for(let k=0,V=N.length;k<V;k++)x(N[k],T,P,z,_)}function C(E){E.target.removeEventListener("dispose",C);for(let P in c){let z=c[P],_=E.target.uuid;_ in z&&(z[_].dispose(),delete z[_])}}}var Dg={[Fo]:Oo,[Bo]:Ho,[ko]:Vo,[cs]:zo,[Oo]:Fo,[Ho]:Bo,[Vo]:ko,[zo]:cs};function Ng(i){function t(){let L=!1,ht=new se,G=null,$=new se(0,0,0,0);return{setMask:function(lt){G!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ut,Vt,ve,Ve){Ve===!0&&(lt*=ve,ut*=ve,Vt*=ve),ht.set(lt,ut,Vt,ve),$.equals(ht)===!1&&(i.clearColor(lt,ut,Vt,ve),$.copy(ht))},reset:function(){L=!1,G=null,$.set(-1,0,0,0)}}}function e(){let L=!1,ht=!1,G=null,$=null,lt=null;return{setReversed:function(ut){ht=ut},setTest:function(ut){ut?xt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(ut){G!==ut&&!L&&(i.depthMask(ut),G=ut)},setFunc:function(ut){if(ht&&(ut=Dg[ut]),$!==ut){switch(ut){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ut}},setLocked:function(ut){L=ut},setClear:function(ut){lt!==ut&&(i.clearDepth(ut),lt=ut)},reset:function(){L=!1,G=null,$=null,lt=null}}}function n(){let L=!1,ht=null,G=null,$=null,lt=null,ut=null,Vt=null,ve=null,Ve=null;return{setTest:function(Yt){L||(Yt?xt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Yt){ht!==Yt&&!L&&(i.stencilMask(Yt),ht=Yt)},setFunc:function(Yt,Ge,Cn){(G!==Yt||$!==Ge||lt!==Cn)&&(i.stencilFunc(Yt,Ge,Cn),G=Yt,$=Ge,lt=Cn)},setOp:function(Yt,Ge,Cn){(ut!==Yt||Vt!==Ge||ve!==Cn)&&(i.stencilOp(Yt,Ge,Cn),ut=Yt,Vt=Ge,ve=Cn)},setLocked:function(Yt){L=Yt},setClear:function(Yt){Ve!==Yt&&(i.clearStencil(Yt),Ve=Yt)},reset:function(){L=!1,ht=null,G=null,$=null,lt=null,ut=null,Vt=null,ve=null,Ve=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,S=null,y=null,x=null,C=null,E=new Et(0,0,0),T=0,P=!1,z=null,_=null,w=null,N=null,k=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,H=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(et)[1]),Z=H>=1):et.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Z=H>=2);let W=null,dt={},ft=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),qt=new se().fromArray(ft),Qt=new se().fromArray(Mt);function K(L,ht,G,$){let lt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(L,ut),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<G;Vt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ht+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ut}let Q={};Q[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),r.setFunc(cs),Bt(!1),Wt(Hc),xt(i.CULL_FACE),I(si);function xt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function pt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Dt(L,ht){return h[L]!==ht?(i.bindFramebuffer(L,ht),h[L]=ht,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function At(L,ht){let G=d,$=!1;if(L){G=u.get(ht),G===void 0&&(G=[],u.set(ht,G));let lt=L.textures;if(G.length!==lt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Vt=lt.length;ut<Vt;ut++)G[ut]=i.COLOR_ATTACHMENT0+ut;G.length=lt.length,$=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,$=!0);$&&i.drawBuffers(G)}function zt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}let ie={[Ti]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};ie[Zu]=i.MIN,ie[Ju]=i.MAX;let Ht={[ju]:i.ZERO,[Qu]:i.ONE,[td]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ht,G,$,lt,ut,Vt,ve,Ve,Yt){if(L===si){g===!0&&(pt(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),L!==qu){if(L!==v||Yt!==P){if((m!==Ti||y!==Ti)&&(i.blendEquation(i.FUNC_ADD),m=Ti,y=Ti),Yt)switch(L){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,S=null,x=null,C=null,E.set(0,0,0),T=0,v=L,P=Yt}return}lt=lt||ht,ut=ut||G,Vt=Vt||$,(ht!==m||lt!==y)&&(i.blendEquationSeparate(ie[ht],ie[lt]),m=ht,y=lt),(G!==p||$!==S||ut!==x||Vt!==C)&&(i.blendFuncSeparate(Ht[G],Ht[$],Ht[ut],Ht[Vt]),p=G,S=$,x=ut,C=Vt),(ve.equals(E)===!1||Ve!==T)&&(i.blendColor(ve.r,ve.g,ve.b,Ve),E.copy(ve),T=Ve),v=L,P=!1}function qe(L,ht){L.side===Le?pt(i.CULL_FACE):xt(i.CULL_FACE);let G=L.side===Oe;ht&&(G=!G),Bt(G),L.blending===ri&&L.transparent===!1?I(si):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){z!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),z=L)}function Wt(L){L!==Xu?(xt(i.CULL_FACE),L!==_&&(L===Hc?i.cullFace(i.BACK):L===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),_=L}function Ct(L){L!==w&&(Z&&i.lineWidth(L),w=L)}function ce(L,ht,G){L?(xt(i.POLYGON_OFFSET_FILL),(N!==ht||k!==G)&&(i.polygonOffset(ht,G),N=ht,k=G)):pt(i.POLYGON_OFFSET_FILL)}function Ut(L){L?xt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+V-1),W!==L&&(i.activeTexture(L),W=L)}function M(L,ht,G){G===void 0&&(W===null?G=i.TEXTURE0+V-1:G=W);let $=dt[G];$===void 0&&($={type:void 0,texture:void 0},dt[G]=$),($.type!==L||$.texture!==ht)&&(W!==G&&(i.activeTexture(G),W=G),i.bindTexture(L,ht||Q[L]),$.type=L,$.texture=ht)}function F(){let L=dt[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(L){qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),qt.copy(L))}function _t(L){Qt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qt.copy(L))}function kt(L,ht){let G=l.get(ht);G===void 0&&(G=new WeakMap,l.set(ht,G));let $=G.get(L);$===void 0&&($=i.getUniformBlockIndex(ht,L.name),G.set(L,$))}function Nt(L,ht){let $=l.get(ht).get(L);o.get(ht)!==$&&(i.uniformBlockBinding(ht,$,L.__bindingPointIndex),o.set(ht,$))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,dt={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,S=null,y=null,x=null,C=null,E=new Et(0,0,0),T=0,P=!1,z=null,_=null,w=null,N=null,k=null,qt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xt,disable:pt,bindFramebuffer:Dt,drawBuffers:At,useProgram:zt,setBlending:I,setMaterial:qe,setFlipSided:Bt,setCullFace:Wt,setLineWidth:Ct,setPolygonOffset:ce,setScissorTest:Ut,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:gt,texImage3D:Pt,updateUBOMapping:kt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:St,compressedTexSubImage2D:rt,compressedTexSubImage3D:mt,scissor:It,viewport:_t,reset:le}}function Nh(i,t,e,n){let s=Fg(n);switch(e){case Zh:return i*t;case jh:return i*t;case Qh:return i*t*2;case tu:return i*t/s.components*s.byteLength;case dc:return i*t/s.components*s.byteLength;case eu:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case Jh:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case Ko:case Yo:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nu:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fg(i){switch(i){case zn:case qh:return{byteLength:1,components:1};case Zs:case Yh:case nr:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Ii:case cc:case On:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Og(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):ta("canvas")}function v(A,M,F){let Y=1,j=Ut(A);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(Y*j.width),St=Math.floor(Y*j.height);u===void 0&&(u=g(q,St));let rt=M?g(q,St):u;return rt.width=q,rt.height=St,rt.getContext("2d").drawImage(A,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+St+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==sn&&A.minFilter!==pn}function p(A){i.generateMipmap(A)}function S(A,M,F,Y,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;if(M===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),M===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){let St=j?Zr:Jt.getTransfer(Y);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=St===ue?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(A,M){let F;return A?M===null||M===Ii||M===ds?F=i.DEPTH24_STENCIL8:M===On?F=i.DEPTH32F_STENCIL8:M===Zs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ii||M===ds?F=i.DEPTH_COMPONENT24:M===On?F=i.DEPTH_COMPONENT32F:M===Zs&&(F=i.DEPTH_COMPONENT16),F}function x(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){let M=A.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M)}function E(A){let M=A.target;M.removeEventListener("dispose",E),z(M)}function T(A){let M=n.get(A);if(M.__webglInit===void 0)return;let F=A.source,Y=d.get(F);if(Y){let j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(A),Object.keys(Y).length===0&&d.delete(F)}n.remove(A)}function P(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let F=A.source,Y=d.get(F);delete Y[M.__cacheKey],a.memory.textures--}function z(A){let M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=A.textures;for(let Y=0,j=F.length;Y<j;Y++){let q=n.get(F[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(A)}let _=0;function w(){_=0}function N(){let A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function k(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function V(A,M){let F=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(F,A,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function Z(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Qt(F,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function H(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Qt(F,A,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function et(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){K(F,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}let W={[Pi]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},dt={[sn]:i.NEAREST,[xd]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},ft={[bd]:i.NEVER,[Cd]:i.ALWAYS,[wd]:i.LESS,[su]:i.LEQUAL,[Ed]:i.EQUAL,[Rd]:i.GEQUAL,[Td]:i.GREATER,[Ad]:i.NOTEQUAL};function Mt(A,M){if(M.type===On&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===pn||M.magFilter===ja||M.magFilter===mr||M.magFilter===Ci||M.minFilter===pn||M.minFilter===ja||M.minFilter===mr||M.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===sn||M.minFilter!==mr&&M.minFilter!==Ci||M.type===On&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qt(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));let Y=M.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let q=k(M);if(q!==A.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[q].usedTimes++;let St=j[A.__cacheKey];St!==void 0&&(j[A.__cacheKey].usedTimes--,St.usedTimes===0&&P(M)),A.__cacheKey=q,A.__webglTexture=j[q].texture}return F}function Qt(A,M,F){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let j=qt(A,M),q=M.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+F);let St=n.get(q);if(q.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+F);let rt=Jt.getPrimaries(Jt.workingColorSpace),mt=M.colorSpace===ni?null:Jt.getPrimaries(M.colorSpace),Xt=M.colorSpace===ni||rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=v(M.image,!1,s.maxTextureSize);tt=ce(M,tt);let gt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),It=S(M.internalFormat,gt,Pt,M.colorSpace,M.isVideoTexture);Mt(Y,M);let _t,kt=M.mipmaps,Nt=M.isVideoTexture!==!0,le=St.__version===void 0||j===!0,L=q.dataReady,ht=x(M,tt);if(M.isDepthTexture)It=y(M.format===fs,M.type),le&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,It,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,It,tt.width,tt.height,0,gt,Pt,null));else if(M.isDataTexture)if(kt.length>0){Nt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,It,kt[0].width,kt[0].height);for(let G=0,$=kt.length;G<$;G++)_t=kt[G],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,gt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,G,It,_t.width,_t.height,0,gt,Pt,_t.data);M.generateMipmaps=!1}else Nt?(le&&e.texStorage2D(i.TEXTURE_2D,ht,It,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Pt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,It,tt.width,tt.height,0,gt,Pt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,It,kt[0].width,kt[0].height,tt.depth);for(let G=0,$=kt.length;G<$;G++)if(_t=kt[G],M.format!==gn)if(gt!==null)if(Nt){if(L)if(M.layerUpdates.size>0){let lt=Nh(_t.width,_t.height,M.format,M.type);for(let ut of M.layerUpdates){let Vt=_t.data.subarray(ut*lt/_t.data.BYTES_PER_ELEMENT,(ut+1)*lt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ut,_t.width,_t.height,1,gt,Vt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_t.width,_t.height,tt.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,It,_t.width,_t.height,tt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_t.width,_t.height,tt.depth,gt,Pt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,It,_t.width,_t.height,tt.depth,0,gt,Pt,_t.data)}else{Nt&&le&&e.texStorage2D(i.TEXTURE_2D,ht,It,kt[0].width,kt[0].height);for(let G=0,$=kt.length;G<$;G++)_t=kt[G],M.format!==gn?gt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,G,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,gt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,G,It,_t.width,_t.height,0,gt,Pt,_t.data)}else if(M.isDataArrayTexture)if(Nt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,It,tt.width,tt.height,tt.depth),L)if(M.layerUpdates.size>0){let G=Nh(tt.width,tt.height,M.format,M.type);for(let $ of M.layerUpdates){let lt=tt.data.subarray($*G/tt.data.BYTES_PER_ELEMENT,($+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,gt,Pt,lt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Pt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,tt.width,tt.height,tt.depth,0,gt,Pt,tt.data);else if(M.isData3DTexture)Nt?(le&&e.texStorage3D(i.TEXTURE_3D,ht,It,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Pt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,It,tt.width,tt.height,tt.depth,0,gt,Pt,tt.data);else if(M.isFramebufferTexture){if(le)if(Nt)e.texStorage2D(i.TEXTURE_2D,ht,It,tt.width,tt.height);else{let G=tt.width,$=tt.height;for(let lt=0;lt<ht;lt++)e.texImage2D(i.TEXTURE_2D,lt,It,G,$,0,gt,Pt,null),G>>=1,$>>=1}}else if(kt.length>0){if(Nt&&le){let G=Ut(kt[0]);e.texStorage2D(i.TEXTURE_2D,ht,It,G.width,G.height)}for(let G=0,$=kt.length;G<$;G++)_t=kt[G],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt,Pt,_t):e.texImage2D(i.TEXTURE_2D,G,It,gt,Pt,_t);M.generateMipmaps=!1}else if(Nt){if(le){let G=Ut(tt);e.texStorage2D(i.TEXTURE_2D,ht,It,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Pt,tt)}else e.texImage2D(i.TEXTURE_2D,0,It,gt,Pt,tt);m(M)&&p(Y),St.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function K(A,M,F){if(M.image.length!==6)return;let Y=qt(A,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let q=n.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);let St=Jt.getPrimaries(Jt.workingColorSpace),rt=M.colorSpace===ni?null:Jt.getPrimaries(M.colorSpace),mt=M.colorSpace===ni||St===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let $=0;$<6;$++)!Xt&&!tt?gt[$]=v(M.image[$],!0,s.maxCubemapSize):gt[$]=tt?M.image[$].image:M.image[$],gt[$]=ce(M,gt[$]);let Pt=gt[0],It=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),kt=S(M.internalFormat,It,_t,M.colorSpace),Nt=M.isVideoTexture!==!0,le=q.__version===void 0||Y===!0,L=j.dataReady,ht=x(M,Pt);Mt(i.TEXTURE_CUBE_MAP,M);let G;if(Xt){Nt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,Pt.width,Pt.height);for(let $=0;$<6;$++){G=gt[$].mipmaps;for(let lt=0;lt<G.length;lt++){let ut=G[lt];M.format!==gn?It!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ut.width,ut.height,It,_t,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,kt,ut.width,ut.height,0,It,_t,ut.data)}}}else{if(G=M.mipmaps,Nt&&le){G.length>0&&ht++;let $=Ut(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,gt[$].width,gt[$].height,It,_t,gt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,gt[$].width,gt[$].height,0,It,_t,gt[$].data);for(let lt=0;lt<G.length;lt++){let Vt=G[lt].image[$].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Vt.width,Vt.height,It,_t,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,kt,Vt.width,Vt.height,0,It,_t,Vt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,It,_t,gt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,It,_t,gt[$]);for(let lt=0;lt<G.length;lt++){let ut=G[lt];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,It,_t,ut.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,kt,It,_t,ut.image[$])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Q(A,M,F,Y,j,q){let St=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),mt=S(F.internalFormat,St,rt,F.colorSpace);if(!n.get(M).__hasExternalTextures){let tt=Math.max(1,M.width>>q),gt=Math.max(1,M.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,mt,tt,gt,M.depth,0,St,rt,null):e.texImage2D(j,q,mt,tt,gt,0,St,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Wt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,n.get(F).__webglTexture,0,Bt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,n.get(F).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=y(M.stencilBuffer,j),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Bt(M);Wt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,q,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,A)}else{let Y=M.textures;for(let j=0;j<Y.length;j++){let q=Y[j],St=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),mt=S(q.internalFormat,St,rt,q.colorSpace),Xt=Bt(M);F&&Wt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,mt,M.width,M.height):Wt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,mt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let Y=n.get(M.depthTexture).__webglTexture,j=Bt(M);if(M.depthTexture.format===rs)Wt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===fs)Wt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(A){let M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),xt(M.__webglDepthbuffer[Y],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),xt(M.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,M,F){let Y=n.get(A);M!==void 0&&Q(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Dt(A)}function zt(A){let M=A.texture,F=n.get(A),Y=n.get(M);A.addEventListener("dispose",E);let j=A.textures,q=A.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let mt=0;mt<M.mipmaps.length;mt++)F.__webglFramebuffer[rt][mt]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let rt=0,mt=j.length;rt<mt;rt++){let Xt=n.get(j[rt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){let mt=j[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);let Xt=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),gt=S(mt.internalFormat,Xt,tt,mt.colorSpace,A.isXRRenderTarget===!0),Pt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Q(F.__webglFramebuffer[rt][mt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else Q(F.__webglFramebuffer[rt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,mt=j.length;rt<mt;rt++){let Xt=j[rt],tt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Mt(i.TEXTURE_2D,Xt),Q(F.__webglFramebuffer,A,Xt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Mt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Q(F.__webglFramebuffer[mt],A,M,i.COLOR_ATTACHMENT0,rt,mt);else Q(F.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,rt,0);m(M)&&p(rt),e.unbindTexture()}A.depthBuffer&&Dt(A)}function ie(A){let M=A.textures;for(let F=0,Y=M.length;F<Y;F++){let j=M[F];if(m(j)){let q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(j).__webglTexture;e.bindTexture(q,St),p(q),e.unbindTexture()}}}let Ht=[],I=[];function qe(A){if(A.samples>0){if(Wt(A)===!1){let M=A.textures,F=A.width,Y=A.height,j=i.COLOR_BUFFER_BIT,q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(A),rt=M.length>1;if(rt)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let Xt=n.get(M[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,i.NEAREST),l===!0&&(Ht.length=0,I.length=0,Ht.push(i.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ht.push(q),I.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let Xt=n.get(M[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function ce(A,M){let F=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==di&&F!==ni&&(Jt.getTransfer(F)===ue?(Y!==gn||j!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=et,this.rebindTextures=At,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Wt}function Bg(i,t){function e(n,s=ni){let r,a=Jt.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===Zh)return i.ALPHA;if(n===Jh)return i.RGB;if(n===gn)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Qh)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===tu)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===eu)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===Kr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===qo||n===Yo||n===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Jo)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===fl||n===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===ml||n===gl||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ul=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Lt=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},kg={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:zg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=new Dl,m=e.getContextAttributes(),p=null,S=null,y=[],x=[],C=new st,E=null,T=new Ie;T.layers.enable(1),T.viewport=new se;let P=new Ie;P.layers.enable(2),P.viewport=new se;let z=[T,P],_=new Ul;_.layers.enable(1),_.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=y[K];return Q===void 0&&(Q=new qs,y[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=y[K];return Q===void 0&&(Q=new qs,y[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=y[K];return Q===void 0&&(Q=new qs,y[K]=Q),Q.getHandSpace()};function k(K){let Q=x.indexOf(K.inputSource);if(Q===-1)return;let xt=y[Q];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<y.length;K++){let Q=x[K];Q!==null&&(x[K]=null,y[K].disconnect(Q))}w=null,N=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Hn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,xt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?fs:rs,xt=m.stencil?ds:Ii);let Dt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Hn(d.textureWidth,d.textureHeight,{format:gn,type:zn,depthTexture:new ua(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(K){for(let Q=0;Q<K.removed.length;Q++){let xt=K.removed[Q],pt=x.indexOf(xt);pt>=0&&(x[pt]=null,y[pt].disconnect(xt))}for(let Q=0;Q<K.added.length;Q++){let xt=K.added[Q],pt=x.indexOf(xt);if(pt===-1){for(let At=0;At<y.length;At++)if(At>=x.length){x.push(xt),pt=At;break}else if(x[At]===null){x[At]=xt,pt=At;break}if(pt===-1)break}let Dt=y[pt];Dt&&Dt.connect(xt)}}let H=new R,et=new R;function W(K,Q,xt){H.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(xt.matrixWorld);let pt=H.distanceTo(et),Dt=Q.projectionMatrix.elements,At=xt.projectionMatrix.elements,zt=Dt[14]/(Dt[10]-1),ie=Dt[14]/(Dt[10]+1),Ht=(Dt[9]+1)/Dt[5],I=(Dt[9]-1)/Dt[5],qe=(Dt[8]-1)/Dt[0],Bt=(At[8]+1)/At[0],Wt=zt*qe,Ct=zt*Bt,ce=pt/(-qe+Bt),Ut=ce*-qe;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let A=zt+ce,M=ie+ce,F=Wt-Ut,Y=Ct+(pt-Ut),j=Ht*ie/M*A,q=I*ie/M*A;K.projectionMatrix.makePerspective(F,Y,j,q,A,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function dt(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,xt=K.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(xt=v.depthFar)),_.near=P.near=T.near=Q,_.far=P.far=T.far=xt,(w!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,N=_.far);let pt=K.parent,Dt=_.cameras;dt(_,pt);for(let At=0;At<Dt.length;At++)dt(Dt[At],pt);Dt.length===2?W(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),ft(K,_,pt)};function ft(K,Q,xt){xt===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Mt=null;function qt(K,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let pt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let At=0;At<xt.length;At++){let zt=xt[At],ie=null;if(f!==null)ie=f.getViewport(zt);else{let I=u.getViewSubImage(d,zt);ie=I.viewport,At===0&&(t.setRenderTargetTextures(S,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(S))}let Ht=z[At];Ht===void 0&&(Ht=new Ie,Ht.layers.enable(At),Ht.viewport=new se,z[At]=Ht),Ht.matrix.fromArray(zt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(zt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ie.x,ie.y,ie.width,ie.height),At===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(Ht)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let At=u.getDepthInformation(xt[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let xt=0;xt<y.length;xt++){let pt=x[xt],Dt=y[xt];pt!==null&&Dt!==void 0&&Dt.update(pt,Q,c||a)}Mt&&Mt(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Qt=new cu;Qt.setAnimationLoop(qt),this.setAnimationLoop=function(K){Mt=K},this.dispose=function(){}}},wi=new wn,Vg=new de;function Gg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(S,C);let E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){let y=u();S.__bindingPointIndex=y;let x=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],x=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,T=x.length;E<T;E++){let P=Array.isArray(x[E])?x[E]:[x[E]];for(let z=0,_=P.length;z<_;z++){let w=P[z];if(f(w,E,z,C)===!0){let N=w.__offset,k=Array.isArray(w.value)?w.value:[w.value],V=0;for(let Z=0;Z<k.length;Z++){let H=k[Z],et=v(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+V,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,V),V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,x,C){let E=S.value,T=y+"_"+x;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let P=C[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(S){let y=S.uniforms,x=0,C=16;for(let T=0,P=y.length;T<P;T++){let z=Array.isArray(y[T])?y[T]:[y[T]];for(let _=0,w=z.length;_<w;_++){let N=z[_],k=Array.isArray(N.value)?N.value:[N.value];for(let V=0,Z=k.length;V<Z;V++){let H=k[V],et=v(H),W=x%C,dt=W%et.boundary,ft=W+dt;x+=dt,ft!==0&&C-ft<et.storage&&(x+=C-ft),N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=et.storage}}}let E=x%C;return E>0&&(x+=C-E),S.__size=x,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var da=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=ai,this.toneMappingExposure=1;let y=this,x=!1,C=0,E=0,T=null,P=-1,z=null,_=new se,w=new se,N=null,k=new Et(0),V=0,Z=e.width,H=e.height,et=1,W=null,dt=null,ft=new se(0,0,Z,H),Mt=new se(0,0,Z,H),qt=!1,Qt=new Js,K=!1,Q=!1,xt=new de,pt=new de,Dt=new R,At=new se,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function Ht(){return T===null?et:1}let I=n;function qe(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){let U="webgl2";if(I=qe(U,b),I===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,Wt,Ct,ce,Ut,A,M,F,Y,j,q,St,rt,mt,Xt,tt,gt,Pt,It,_t,kt,Nt,le,L;function ht(){Bt=new a0(I),Bt.init(),Nt=new Bg(I,Bt),Wt=new t0(I,Bt,t,Nt),Ct=new Ng(I),Wt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),ce=new c0(I),Ut=new Sg,A=new Og(I,Bt,Ct,Ut,Wt,Nt,ce),M=new n0(y),F=new r0(y),Y=new gf(I),le=new jm(I,Y),j=new o0(I,Y,ce,le),q=new u0(I,j,Y,ce),It=new h0(I,Wt,A),tt=new e0(Ut),St=new Mg(y,M,F,Bt,Wt,le,tt),rt=new Gg(y,Ut),mt=new wg,Xt=new Pg(Bt),Pt=new Jm(y,M,F,Ct,q,d,l),gt=new Ug(y,q,Wt),L=new Wg(I,ce,Wt,Ct),_t=new Qm(I,Bt,ce),kt=new l0(I,Bt,ce),ce.programs=St.programs,y.capabilities=Wt,y.extensions=Bt,y.properties=Ut,y.renderLists=mt,y.shadowMap=gt,y.state=Ct,y.info=ce}ht();let G=new Nl(y,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(Z,H,!1))},this.getSize=function(b){return b.set(Z,H)},this.setSize=function(b,U,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,H=U,e.width=Math.floor(b*et),e.height=Math.floor(U*et),O===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Z*et,H*et).floor()},this.setDrawingBufferSize=function(b,U,O){Z=b,H=U,et=O,e.width=Math.floor(b*O),e.height=Math.floor(U*O),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,U,O,B){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,U,O,B),Ct.viewport(_.copy(ft).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Mt)},this.setScissor=function(b,U,O,B){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,U,O,B),Ct.scissor(w.copy(Mt).multiplyScalar(et).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){Ct.setScissorTest(qt=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,U=!0,O=!0){let B=0;if(b){let D=!1;if(T!==null){let nt=T.texture.format;D=nt===pc||nt===fc||nt===dc}if(D){let nt=T.texture.type,ct=nt===zn||nt===Ii||nt===Zs||nt===ds||nt===hc||nt===uc,vt=Pt.getClearColor(),yt=Pt.getClearAlpha(),Tt=vt.r,Rt=vt.g,bt=vt.b;ct?(f[0]=Tt,f[1]=Rt,f[2]=bt,f[3]=yt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Tt,g[1]=Rt,g[2]=bt,g[3]=yt,I.clearBufferiv(I.COLOR,0,g))}else B|=I.COLOR_BUFFER_BIT}U&&(B|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),Xt.dispose(),Ut.dispose(),M.dispose(),F.dispose(),q.dispose(),le.dispose(),L.dispose(),St.dispose(),G.dispose(),G.removeEventListener("sessionstart",Uc),G.removeEventListener("sessionend",Dc),vi.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let b=ce.autoReset,U=gt.enabled,O=gt.autoUpdate,B=gt.needsUpdate,D=gt.type;ht(),ce.autoReset=b,gt.enabled=U,gt.autoUpdate=O,gt.needsUpdate=B,gt.type=D}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vt(b){let U=b.target;U.removeEventListener("dispose",Vt),ve(U)}function ve(b){Ve(b),Ut.remove(b)}function Ve(b){let U=Ut.get(b).programs;U!==void 0&&(U.forEach(function(O){St.releaseProgram(O)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,O,B,D,nt){U===null&&(U=zt);let ct=D.isMesh&&D.matrixWorld.determinant()<0,vt=Hu(b,U,O,B,D);Ct.setMaterial(B,ct);let yt=O.index,Tt=1;if(B.wireframe===!0){if(yt=j.getWireframeAttribute(O),yt===void 0)return;Tt=2}let Rt=O.drawRange,bt=O.attributes.position,te=Rt.start*Tt,he=(Rt.start+Rt.count)*Tt;nt!==null&&(te=Math.max(te,nt.start*Tt),he=Math.min(he,(nt.start+nt.count)*Tt)),yt!==null?(te=Math.max(te,0),he=Math.min(he,yt.count)):bt!=null&&(te=Math.max(te,0),he=Math.min(he,bt.count));let me=he-te;if(me<0||me===1/0)return;le.setup(D,B,vt,O,yt);let Ye,$t=_t;if(yt!==null&&(Ye=Y.get(yt),$t=kt,$t.setIndex(Ye)),D.isMesh)B.wireframe===!0?(Ct.setLineWidth(B.wireframeLinewidth*Ht()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(D.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),Ct.setLineWidth(wt*Ht()),D.isLineSegments?$t.setMode(I.LINES):D.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else D.isPoints?$t.setMode(I.POINTS):D.isSprite&&$t.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let wt=D._multiDrawStarts,Pe=D._multiDrawCounts,Zt=D._multiDrawCount,hn=yt?Y.get(yt).bytesPerElement:1,ki=Ut.get(B).currentProgram.getUniforms();for(let $e=0;$e<Zt;$e++)ki.setValue(I,"_gl_DrawID",$e),$t.render(wt[$e]/hn,Pe[$e])}else if(D.isInstancedMesh)$t.renderInstances(te,me,D.count);else if(O.isInstancedBufferGeometry){let wt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Pe=Math.min(O.instanceCount,wt);$t.renderInstances(te,me,Pe)}else $t.render(te,me)};function Yt(b,U,O){b.transparent===!0&&b.side===Le&&b.forceSinglePass===!1?(b.side=Oe,b.needsUpdate=!0,pr(b,U,O),b.side=oi,b.needsUpdate=!0,pr(b,U,O),b.side=Le):pr(b,U,O)}this.compile=function(b,U,O=null){O===null&&(O=b),m=Xt.get(O),m.init(U),S.push(m),O.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),b!==O&&b.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let B=new Set;return b.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let nt=D.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){let vt=nt[ct];Yt(vt,O,D),B.add(vt)}else Yt(nt,O,D),B.add(nt)}),S.pop(),m=null,B},this.compileAsync=function(b,U,O=null){let B=this.compile(b,U,O);return new Promise(D=>{function nt(){if(B.forEach(function(ct){Ut.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){D(b);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ge=null;function Cn(b){Ge&&Ge(b)}function Uc(){vi.stop()}function Dc(){vi.start()}let vi=new cu;vi.setAnimationLoop(Cn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(b){Ge=b,G.setAnimationLoop(b),b===null?vi.stop():vi.start()},G.addEventListener("sessionstart",Uc),G.addEventListener("sessionend",Dc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,T),m=Xt.get(b,S.length),m.init(U),S.push(m),pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qt.setFromProjectionMatrix(pt),Q=this.localClippingEnabled,K=tt.init(this.clippingPlanes,Q),v=mt.get(b,p.length),v.init(),p.push(v),G.enabled===!0&&G.isPresenting===!0){let nt=y.xr.getDepthSensingMesh();nt!==null&&Ya(nt,U,-1/0,y.sortObjects)}Ya(b,U,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(W,dt),ie=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ie&&Pt.addToRenderList(v,b),this.info.render.frame++,K===!0&&tt.beginShadows();let O=m.state.shadowsArray;gt.render(O,b,U),K===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=v.opaque,D=v.transmissive;if(m.setupLights(),U.isArrayCamera){let nt=U.cameras;if(D.length>0)for(let ct=0,vt=nt.length;ct<vt;ct++){let yt=nt[ct];Fc(B,D,b,yt)}ie&&Pt.render(b);for(let ct=0,vt=nt.length;ct<vt;ct++){let yt=nt[ct];Nc(v,b,yt,yt.viewport)}}else D.length>0&&Fc(B,D,b,U),ie&&Pt.render(b),Nc(v,b,U);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(y,b,U),le.resetDefaultState(),P=-1,z=null,S.pop(),S.length>0?(m=S[S.length-1],K===!0&&tt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ya(b,U,O,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Qt.intersectsSprite(b)){B&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);let ct=q.update(b),vt=b.material;vt.visible&&v.push(b,ct,vt,O,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Qt.intersectsObject(b))){let ct=q.update(b),vt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),At.copy(ct.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(vt)){let yt=ct.groups;for(let Tt=0,Rt=yt.length;Tt<Rt;Tt++){let bt=yt[Tt],te=vt[bt.materialIndex];te&&te.visible&&v.push(b,ct,te,O,At.z,bt)}}else vt.visible&&v.push(b,ct,vt,O,At.z,null)}}let nt=b.children;for(let ct=0,vt=nt.length;ct<vt;ct++)Ya(nt[ct],U,O,B)}function Nc(b,U,O,B){let D=b.opaque,nt=b.transmissive,ct=b.transparent;m.setupLightsView(O),K===!0&&tt.setGlobalState(y.clippingPlanes,O),B&&Ct.viewport(_.copy(B)),D.length>0&&fr(D,U,O),nt.length>0&&fr(nt,U,O),ct.length>0&&fr(ct,U,O),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Fc(b,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Hn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?nr:zn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let nt=m.state.transmissionRenderTarget[B.id],ct=B.viewport||_;nt.setSize(ct.z,ct.w);let vt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(k),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),ie&&Pt.render(O);let yt=y.toneMapping;y.toneMapping=ai;let Tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),K===!0&&tt.setGlobalState(y.clippingPlanes,B),fr(b,O,B),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let bt=0,te=U.length;bt<te;bt++){let he=U[bt],me=he.object,Ye=he.geometry,$t=he.material,wt=he.group;if($t.side===Le&&me.layers.test(B.layers)){let Pe=$t.side;$t.side=Oe,$t.needsUpdate=!0,Oc(me,O,B,Ye,$t,wt),$t.side=Pe,$t.needsUpdate=!0,Rt=!0}}Rt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}y.setRenderTarget(vt),y.setClearColor(k,V),Tt!==void 0&&(B.viewport=Tt),y.toneMapping=yt}function fr(b,U,O){let B=U.isScene===!0?U.overrideMaterial:null;for(let D=0,nt=b.length;D<nt;D++){let ct=b[D],vt=ct.object,yt=ct.geometry,Tt=B===null?ct.material:B,Rt=ct.group;vt.layers.test(O.layers)&&Oc(vt,U,O,yt,Tt,Rt)}}function Oc(b,U,O,B,D,nt){b.onBeforeRender(y,U,O,B,D,nt),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),D.onBeforeRender(y,U,O,B,b,nt),D.transparent===!0&&D.side===Le&&D.forceSinglePass===!1?(D.side=Oe,D.needsUpdate=!0,y.renderBufferDirect(O,U,B,D,b,nt),D.side=oi,D.needsUpdate=!0,y.renderBufferDirect(O,U,B,D,b,nt),D.side=Le):y.renderBufferDirect(O,U,B,D,b,nt),b.onAfterRender(y,U,O,B,D,nt)}function pr(b,U,O){U.isScene!==!0&&(U=zt);let B=Ut.get(b),D=m.state.lights,nt=m.state.shadowsArray,ct=D.state.version,vt=St.getParameters(b,D.state,nt,U,O),yt=St.getProgramCacheKey(vt),Tt=B.programs;B.environment=b.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(b.isMeshStandardMaterial?F:M).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Tt===void 0&&(b.addEventListener("dispose",Vt),Tt=new Map,B.programs=Tt);let Rt=Tt.get(yt);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===ct)return kc(b,vt),Rt}else vt.uniforms=St.getUniforms(b),b.onBeforeCompile(vt,y),Rt=St.acquireProgram(vt,yt),Tt.set(yt,Rt),B.uniforms=vt.uniforms;let bt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=tt.uniform),kc(b,vt),B.needsLights=Gu(b),B.lightsStateVersion=ct,B.needsLights&&(bt.ambientLightColor.value=D.state.ambient,bt.lightProbe.value=D.state.probe,bt.directionalLights.value=D.state.directional,bt.directionalLightShadows.value=D.state.directionalShadow,bt.spotLights.value=D.state.spot,bt.spotLightShadows.value=D.state.spotShadow,bt.rectAreaLights.value=D.state.rectArea,bt.ltc_1.value=D.state.rectAreaLTC1,bt.ltc_2.value=D.state.rectAreaLTC2,bt.pointLights.value=D.state.point,bt.pointLightShadows.value=D.state.pointShadow,bt.hemisphereLights.value=D.state.hemi,bt.directionalShadowMap.value=D.state.directionalShadowMap,bt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,bt.spotShadowMap.value=D.state.spotShadowMap,bt.spotLightMatrix.value=D.state.spotLightMatrix,bt.spotLightMap.value=D.state.spotLightMap,bt.pointShadowMap.value=D.state.pointShadowMap,bt.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function Bc(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=os.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function kc(b,U){let O=Ut.get(b);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Hu(b,U,O,B,D){U.isScene!==!0&&(U=zt),A.resetTextureUnits();let nt=U.fog,ct=B.isMeshStandardMaterial?U.environment:null,vt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:di,yt=(B.isMeshStandardMaterial?F:M).get(B.envMap||ct),Tt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Rt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!O.morphAttributes.position,te=!!O.morphAttributes.normal,he=!!O.morphAttributes.color,me=ai;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=y.toneMapping);let Ye=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=Ye!==void 0?Ye.length:0,wt=Ut.get(B),Pe=m.state.lights;if(K===!0&&(Q===!0||b!==z)){let en=b===z&&B.id===P;tt.setState(B,b,en)}let Zt=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Pe.state.version||wt.outputColorSpace!==vt||D.isBatchedMesh&&wt.batching===!1||!D.isBatchedMesh&&wt.batching===!0||D.isBatchedMesh&&wt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&wt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&wt.instancing===!1||!D.isInstancedMesh&&wt.instancing===!0||D.isSkinnedMesh&&wt.skinning===!1||!D.isSkinnedMesh&&wt.skinning===!0||D.isInstancedMesh&&wt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&wt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&wt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&wt.instancingMorph===!1&&D.morphTexture!==null||wt.envMap!==yt||B.fog===!0&&wt.fog!==nt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Tt||wt.vertexTangents!==Rt||wt.morphTargets!==bt||wt.morphNormals!==te||wt.morphColors!==he||wt.toneMapping!==me||wt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,wt.__version=B.version);let hn=wt.currentProgram;Zt===!0&&(hn=pr(B,U,D));let ki=!1,$e=!1,$a=!1,ge=hn.getUniforms(),$n=wt.uniforms;if(Ct.useProgram(hn.program)&&(ki=!0,$e=!0,$a=!0),B.id!==P&&(P=B.id,$e=!0),ki||z!==b){Wt.reverseDepthBuffer?(xt.copy(b.projectionMatrix),Yd(xt),$d(xt),ge.setValue(I,"projectionMatrix",xt)):ge.setValue(I,"projectionMatrix",b.projectionMatrix),ge.setValue(I,"viewMatrix",b.matrixWorldInverse);let en=ge.map.cameraPosition;en!==void 0&&en.setValue(I,Dt.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ge.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,$e=!0,$a=!0)}if(D.isSkinnedMesh){ge.setOptional(I,D,"bindMatrix"),ge.setOptional(I,D,"bindMatrixInverse");let en=D.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ge.setValue(I,"boneTexture",en.boneTexture,A))}D.isBatchedMesh&&(ge.setOptional(I,D,"batchingTexture"),ge.setValue(I,"batchingTexture",D._matricesTexture,A),ge.setOptional(I,D,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",D._indirectTexture,A),ge.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",D._colorsTexture,A));let Za=O.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0)&&It.update(D,O,hn),($e||wt.receiveShadow!==D.receiveShadow)&&(wt.receiveShadow=D.receiveShadow,ge.setValue(I,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($n.envMap.value=yt,$n.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&($n.envMapIntensity.value=U.environmentIntensity),$e&&(ge.setValue(I,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&Vu($n,$a),nt&&B.fog===!0&&rt.refreshFogUniforms($n,nt),rt.refreshMaterialUniforms($n,B,et,H,m.state.transmissionRenderTarget[b.id]),os.upload(I,Bc(wt),$n,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(os.upload(I,Bc(wt),$n,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ge.setValue(I,"center",D.center),ge.setValue(I,"modelViewMatrix",D.modelViewMatrix),ge.setValue(I,"normalMatrix",D.normalMatrix),ge.setValue(I,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let en=B.uniformsGroups;for(let Ja=0,Wu=en.length;Ja<Wu;Ja++){let zc=en[Ja];L.update(zc,hn),L.bind(zc,hn)}}return hn}function Vu(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Gu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,U,O){Ut.get(b.texture).__webglTexture=U,Ut.get(b.depthTexture).__webglTexture=O;let B=Ut.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let O=Ut.get(b);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,O=0){T=b,C=U,E=O;let B=!0,D=null,nt=!1,ct=!1;if(b){let yt=Ut.get(b);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(yt.__hasExternalTextures)A.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let bt=b.depthTexture;if(yt.__boundDepthTexture!==bt){if(bt!==null&&Ut.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Tt=b.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ct=!0);let Rt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?D=Rt[U][O]:D=Rt[U],nt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?D=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Rt)?D=Rt[O]:D=Rt,_.copy(b.viewport),w.copy(b.scissor),N=b.scissorTest}else _.copy(ft).multiplyScalar(et).floor(),w.copy(Mt).multiplyScalar(et).floor(),N=qt;if(Ct.bindFramebuffer(I.FRAMEBUFFER,D)&&B&&Ct.drawBuffers(b,D),Ct.viewport(_),Ct.scissor(w),Ct.setScissorTest(N),nt){let yt=Ut.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,O)}else if(ct){let yt=Ut.get(b.texture),Tt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,O||0,Tt)}P=-1},this.readRenderTargetPixels=function(b,U,O,B,D,nt,ct){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){Ct.bindFramebuffer(I.FRAMEBUFFER,vt);try{let yt=b.texture,Tt=yt.format,Rt=yt.type;if(!Wt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&O>=0&&O<=b.height-D&&I.readPixels(U,O,B,D,Nt.convert(Tt),Nt.convert(Rt),nt)}finally{let yt=T!==null?Ut.get(T).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,U,O,B,D,nt,ct){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){let yt=b.texture,Tt=yt.format,Rt=yt.type;if(!Wt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-B&&O>=0&&O<=b.height-D){Ct.bindFramebuffer(I.FRAMEBUFFER,vt);let bt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(U,O,B,D,Nt.convert(Tt),Nt.convert(Rt),0);let te=T!==null?Ut.get(T).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,te);let he=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qd(I,he,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(bt),I.deleteSync(he),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,O=0){b.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let B=Math.pow(2,-O),D=Math.floor(b.image.width*B),nt=Math.floor(b.image.height*B),ct=U!==null?U.x:0,vt=U!==null?U.y:0;A.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,ct,vt,D,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(b,U,O=null,B=null,D=0){b.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],U=arguments[2],D=arguments[3]||0,O=null);let nt,ct,vt,yt,Tt,Rt;O!==null?(nt=O.max.x-O.min.x,ct=O.max.y-O.min.y,vt=O.min.x,yt=O.min.y):(nt=b.image.width,ct=b.image.height,vt=0,yt=0),B!==null?(Tt=B.x,Rt=B.y):(Tt=0,Rt=0);let bt=Nt.convert(U.format),te=Nt.convert(U.type);A.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let he=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ye=I.getParameter(I.UNPACK_SKIP_PIXELS),$t=I.getParameter(I.UNPACK_SKIP_ROWS),wt=I.getParameter(I.UNPACK_SKIP_IMAGES),Pe=b.isCompressedTexture?b.mipmaps[D]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,yt),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,Tt,Rt,nt,ct,bt,te,Pe.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,Tt,Rt,Pe.width,Pe.height,bt,Pe.data):I.texSubImage2D(I.TEXTURE_2D,D,Tt,Rt,nt,ct,bt,te,Pe),I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt),D===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(b,U,O=null,B=null,D=0){b.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,b=arguments[2],U=arguments[3],D=arguments[4]||0);let nt,ct,vt,yt,Tt,Rt,bt,te,he,me=b.isCompressedTexture?b.mipmaps[D]:b.image;O!==null?(nt=O.max.x-O.min.x,ct=O.max.y-O.min.y,vt=O.max.z-O.min.z,yt=O.min.x,Tt=O.min.y,Rt=O.min.z):(nt=me.width,ct=me.height,vt=me.depth,yt=0,Tt=0,Rt=0),B!==null?(bt=B.x,te=B.y,he=B.z):(bt=0,te=0,he=0);let Ye=Nt.convert(U.format),$t=Nt.convert(U.type),wt;if(U.isData3DTexture)A.setTexture3D(U,0),wt=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),wt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Pe=I.getParameter(I.UNPACK_ROW_LENGTH),Zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hn=I.getParameter(I.UNPACK_SKIP_PIXELS),ki=I.getParameter(I.UNPACK_SKIP_ROWS),$e=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(wt,D,bt,te,he,nt,ct,vt,Ye,$t,me.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,D,bt,te,he,nt,ct,vt,Ye,me.data):I.texSubImage3D(wt,D,bt,te,he,nt,ct,vt,Ye,$t,me),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ki),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),D===0&&U.generateMipmaps&&I.generateMipmap(wt),Ct.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Ct.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,Ct.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===mc?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ta?"display-p3":"srgb"}};var En=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fa=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ze=new R,pa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},js=class extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ts,zs=new R,es=new R,ns=new R,is=new st,Hs=new st,pu=new de,Fr=new R,Vs=new R,Or=new R,Fh=new st,Ro=new st,Oh=new st,ma=class extends Me{constructor(t=new js){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fl(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new pa(n,3,0,!1)),ts.setAttribute("uv",new pa(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Br(Fr.set(-.5,-.5,0),ns,a,es,s,r),Br(Vs.set(.5,-.5,0),ns,a,es,s,r),Br(Or.set(.5,.5,0),ns,a,es,s,r),Fh.set(0,0),Ro.set(1,0),Oh.set(1,1);let o=t.ray.intersectTriangle(Fr,Vs,Or,!1,zs);if(o===null&&(Br(Vs.set(-.5,.5,0),ns,a,es,s,r),Ro.set(0,1),o=t.ray.intersectTriangle(Fr,Or,Vs,!1,zs),o===null))return;let l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:ii.getInterpolation(zs,Fr,Vs,Or,Fh,Ro,Oh,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Br(i,t,e,n,s,r){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Hs.x=r*is.x-s*is.y,Hs.y=s*is.x+r*is.y):Hs.copy(is),i.copy(t),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(pu)}var Qs=class extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bh=new de,Ol=new ia,kr=new ms,zr=new R,ga=class extends Me{constructor(t=new _e,e=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Bh.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(Bh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);zr.fromBufferAttribute(u,m),kh(zr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)zr.fromBufferAttribute(u,g),kh(zr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kh(i,t,e,n,s,r,a){let o=Ol.distanceSqToPoint(i);if(o<e){let l=new R;Ol.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var _s=class extends je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,l=new de;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends an{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends tr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Hr=new R,Co=new vc,Po=new vc,Io=new vc,kl=class extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Hr.subVectors(s[0],s[1]).add(s[0]),c=Hr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Co.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Po.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Io.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Po.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Io.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Co.calc(l),Po.calc(l),Io.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Xg(i,t){let e=1-i;return e*e*t}function Kg(i,t){return 2*(1-i)*i*t}function qg(i,t){return i*i*t}function Ys(i,t,e,n){return Xg(i,t)+Kg(i,e)+qg(i,n)}function Yg(i,t){let e=1-i;return e*e*e*t}function $g(i,t){let e=1-i;return 3*e*e*i*t}function Zg(i,t){return 3*(1-i)*i*i*t}function Jg(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Yg(i,t)+$g(i,e)+Zg(i,n)+Jg(i,s)}var _a=class extends an{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends an{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},va=class extends an{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends an{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends an{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vs=class extends an{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y),Ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(zh(o,l.x,c.x,h.x,u.x),zh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Vl=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:kl,CubicBezierCurve:_a,CubicBezierCurve3:zl,EllipseCurve:tr,LineCurve:va,LineCurve3:Hl,QuadraticBezierCurve:xa,QuadraticBezierCurve3:vs,SplineCurve:ya}),Gl=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vl[s.type]().fromJSON(s))}return this}},Wl=class extends Gl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new va(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xa(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new _a(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ya(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new tr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xl=class i extends _e{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new R,d=new st,f=new R,g=new R,v=new R,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let S=0;S<=e;S++){let y=n+S*h*s,x=Math.sin(y),C=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*C,a.push(u.x,u.y,u.z),d.x=S/e,d.y=E/(t.length-1),o.push(d.x,d.y);let T=l[3*E+0]*x,P=l[3*E+1],z=l[3*E+0]*C;c.push(T,P,z)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){let x=y+S*t.length,C=x,E=x+t.length,T=x+t.length+1,P=x+1;r.push(C,E,P),r.push(T,P,E)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("uv",new Gt(o,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Be=class i extends Xl{constructor(t=1,e=1,n=4,s=8){let r=new Wl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},hi=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},jt=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function S(){let x=new R,C=new R,E=0,T=(e-t)/n;for(let P=0;P<=r;P++){let z=[],_=P/r,w=_*(e-t)+t;for(let N=0;N<=s;N++){let k=N/s,V=k*l+o,Z=Math.sin(V),H=Math.cos(V);C.x=w*Z,C.y=-_*n+m,C.z=w*H,u.push(C.x,C.y,C.z),x.set(Z,T,H).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-_),z.push(g++)}v.push(z)}for(let P=0;P<s;P++)for(let z=0;z<r;z++){let _=v[z][P],w=v[z+1][P],N=v[z+1][P+1],k=v[z][P+1];t>0&&(h.push(_,w,k),E+=3),e>0&&(h.push(w,N,k),E+=3)}c.addGroup(p,E,0),p+=E}function y(x){let C=g,E=new st,T=new R,P=0,z=x===!0?t:e,_=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;let w=g;for(let N=0;N<=s;N++){let V=N/s*l+o,Z=Math.cos(V),H=Math.sin(V);T.x=z*H,T.y=m*_,T.z=z*Z,u.push(T.x,T.y,T.z),d.push(0,_,0),E.x=Z*.5+.5,E.y=H*.5*_+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){let k=C+N,V=w+N;x===!0?h.push(V,V+1,k):h.push(V+1,V,k),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tn=class i extends jt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kl=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new R,x=new R,C=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],C),l(y,x,C,S)}function l(S,y,x,C){let E=C+1,T=[];for(let P=0;P<=E;P++){T[P]=[];let z=S.clone().lerp(x,P/E),_=y.clone().lerp(x,P/E),w=E-P;for(let N=0;N<=w;N++)N===0&&P===E?T[P][N]=z:T[P][N]=z.clone().lerp(_,N/w)}for(let P=0;P<E;P++)for(let z=0;z<2*(E-P)-1;z++){let _=Math.floor(z/2);z%2===0?(d(T[P][_+1]),d(T[P+1][_]),d(T[P][_])):(d(T[P][_+1]),d(T[P+1][_+1]),d(T[P+1][_]))}}function c(S){let y=new R;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(S),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let S=new R;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let x=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;a.push(x,1-C)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let y=a[S+0],x=a[S+2],C=a[S+4],E=Math.max(y,x,C),T=Math.min(y,x,C);E>.9&&T<.1&&(y<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){let x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let S=new R,y=new R,x=new R,C=new R,E=new st,T=new st,P=new st;for(let z=0,_=0;z<r.length;z+=9,_+=6){S.set(r[z+0],r[z+1],r[z+2]),y.set(r[z+3],r[z+4],r[z+5]),x.set(r[z+6],r[z+7],r[z+8]),E.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),C.copy(S).add(y).add(x).divideScalar(3);let w=m(C);v(E,_+0,S,w),v(T,_+2,y,w),v(P,_+4,x,w)}}function v(S,y,x,C){C<0&&S.x===1&&(a[y]=S.x-1),x.x===0&&x.z===0&&(a[y]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ui=class i extends Kl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ma=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new R,g=new st;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let S=p+m,y=S,x=S+n+1,C=S+n+2,E=S+1;o.push(y,x,E),o.push(x,C,E)}}this.setIndex(o),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var oe=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let S=[],y=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+x,1-y),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let y=h[p][S+1],x=h[p][S],C=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&f.push(y,x,E),(p!==n-1||l<Math.PI)&&f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _n=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Sa=class i extends _e{constructor(t=new vs(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new st,h=new R,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),p()}function m(y){h=t.getPointAt(y/e,h);let x=a.normals[y],C=a.binormals[y];for(let E=0;E<=s;E++){let T=E/s*Math.PI*2,P=Math.sin(T),z=-Math.cos(T);l.x=z*x.x+P*C.x,l.y=z*x.y+P*C.y,l.z=z*x.z+P*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let C=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),T=(s+1)*y+x,P=(s+1)*(y-1)+x;g.push(C,E,P),g.push(E,T,P)}}function S(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Vl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var xs=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,o=2*e-n;break;case Kc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:a=t,l=2*n-e;break;case Kc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+S*a[c+C]+y*a[l+C]+x*a[u+C];return r}},Yl=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$l=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=vl;var Di=class extends vn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=$r;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends vn{};Zl.prototype.ValueTypeName="color";var Jl=class extends vn{};Jl.prototype.ValueTypeName="number";var jl=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},ba=class extends vn{InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends vn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=$r;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends vn{};Ql.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Qg=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},An=class extends Ms{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Lo=new de,Hh=new R,Vh=new R,er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nc=class extends er{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ps*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},wa=class extends Ms{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gh=new de,Gs=new R,Uo=new R,ic=class extends er{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),Uo.copy(n.position),Uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Uo),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}},Ss=class extends Ms{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ic}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},sc=class extends er{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ui=class extends Ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xc="\\[\\]\\.:\\/",t_=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",e_="[^"+xc.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",yc),i_=/(WCOD+)?/.source.replace("WCOD",e_),s_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),r_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),a_=new RegExp("^"+n_+i_+s_+r_+"$"),o_=["material","materials","bones","map"],rc=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(t){let e=a_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);o_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=rc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);var mu=[["nose","neck"],["neck","leftShoulder"],["neck","rightShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["neck","root"],["root","leftHip"],["root","rightHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]],ir=class{constructor(t,e){this.joints=t,this.aspect=e}distance(t,e){return Math.hypot((t.x-e.x)*this.aspect,t.y-e.y)}get hipCenter(){let t=this.joints;return t.root?t.root:t.leftHip&&t.rightHip?{x:(t.leftHip.x+t.rightHip.x)/2,y:(t.leftHip.y+t.rightHip.y)/2}:null}get neckPoint(){let t=this.joints;return t.neck?t.neck:t.leftShoulder&&t.rightShoulder?{x:(t.leftShoulder.x+t.rightShoulder.x)/2,y:(t.leftShoulder.y+t.rightShoulder.y)/2}:null}get torsoLength(){let t=this.neckPoint,e=this.hipCenter;return t&&e?this.distance(t,e):null}},We={noPerson:{key:"noPerson",good:!1,message:"Can't see anyone"},tooClose:{key:"tooClose",good:!1,message:"Too close \u2014 step back"},tooFar:{key:"tooFar",good:!1,message:"Too far \u2014 come closer"},goLeft:{key:"goLeft",good:!1,message:"Move a little left"},goRight:{key:"goRight",good:!1,message:"Move a little right"},good:{key:"good",good:!0,message:"Perfect!"}};function Ra(){return{pose:null,status:We.noPerson,bodyX:.5,lateral:0,isCalibrated:!1,jumpCount:0,isAirborne:!1,isCrouching:!1,leftHand:null,rightHand:null,handsUpRaised:!1,oneHandRaised:!1,handsUpProgress:0,confirmProgress:0,timestamp:0,keyboardActive:!1}}var sr=class i{constructor(t=1.2,e=.5,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.reset()}static alpha(t,e){return 1/(1+1/(2*Math.PI*t)/e)}filter(t,e){if(this.value===null||this.last===null||e<=this.last)return this.value=t,this.last=e,t;let n=Math.min(e-this.last,.5);this.last=e;let s=(t-this.value)/n;this.deriv+=i.alpha(this.dCutoff,n)*(s-this.deriv);let r=this.minCutoff+this.beta*Math.abs(this.deriv);return this.value+=i.alpha(r,n)*(t-this.value),this.value}reset(){this.value=null,this.last=null,this.deriv=0}};var rr=class{constructor(t=.2){this.grace=t,this.since=null,this.lastActive=null,this.armed=!0}update(t,e,n){return t?(this.lastActive=n,this.since===null&&(this.since=n),this.armed&&n-this.since>=e?(this.armed=!1,!0):!1):this.lastActive===null?(this.since=null,this.armed=!0,!1):(n-this.lastActive<=this.grace||(this.since=null,!this.armed&&n-this.lastActive>.25&&(this.armed=!0)),!1)}progress(t,e){return!this.armed||this.since===null||this.lastActive===null||e-this.lastActive>this.grace?0:Math.min(1,(this.lastActive-this.since)/t)}reset(t){this.since=null,this.armed=!t,t&&this.lastActive===null&&(this.lastActive=-100)}},Ca=class i{constructor(){this.handsUpHold=1,this.thumbsUpHold=.4,this.raiseHandHold=.7,this.lastPose=null,this.lastPoseTime=-100,this.jointSeen={},this.bridgeTime=.35,this.centerXFilter=new sr(1,.7),this.handFilters=[0,1,2,3].map(()=>new sr(1.6,1.5)),this.handLastSeen=[-100,-100],this.lastHands=[null,null],this.calibratedCenterX=null,this.refTorso=null,this.calibrationRequested=!1,this.needsCalibration=!0,this.goodSince=null,this.absentSince=null,this.lastLateral=0,this.baseCenterY=null,this.baseHipY=null,this.baseNeckY=null,this.baseAnkleY=null,this.lastCenterY=null,this.lastTime=null,this.airborne=!1,this.airborneSince=0,this.landedAt=-100,this.jumpCount=0,this.crouching=!1,this.status=We.noPerson,this.candidate=We.noPerson,this.candidateFrames=0,this.swipeHistory=[[],[]],this.swipeCooldownUntil=0,this.handsUp=new rr(.2),this.thumbs=new rr(.25),this.raiseHand=new rr(.2)}requestCalibration(){this.calibrationRequested=!0}resetGestures(){this.handsUp.reset(!0),this.thumbs.reset(!0),this.raiseHand.reset(!0)}process(t,e,n){let s=this.bridge(t,n),r=Ra();r.timestamp=n,r.pose=s,r.status=this.debounced(i.evaluateStatus(s));let a=[],o=Math.min(Math.max(n-(this.lastTime??n-1/30),1/240),.25);this.lastTime=n;let l=s?.neckPoint,c=s?.hipCenter;if(s&&l&&c&&s.distance(l,c)>.02){let d=s.distance(l,c);this.absentSince!==null&&n-this.absentSince>1.5&&(this.needsCalibration=!0),this.absentSince=null;let f=this.centerXFilter.filter((l.x+c.x)/2,n);r.bodyX=f,r.status.good?this.goodSince===null&&(this.goodSince=n):this.goodSince=null,(this.calibrationRequested||this.refTorso===null||this.needsCalibration&&this.goodSince!==null&&n-this.goodSince>.6)&&this.calibrate(f,l,c,d,s);let g=this.refTorso??d;r.isCalibrated=!this.needsCalibration,this.lastLateral=(f-(this.calibratedCenterX??.5))*s.aspect/g,r.lateral=this.lastLateral,this.updateJumpAndCrouch(s,l,c,g,d,n,o),r.jumpCount=this.jumpCount,r.isAirborne=this.airborne,r.isCrouching=this.crouching,r.leftHand=this.hand(0,s.joints.leftWrist,l,c,g,s.aspect,n),r.rightHand=this.hand(1,s.joints.rightWrist,l,c,g,s.aspect,n);let v=this.detectSwipe(s,l,c,g,n);v&&a.push(v);let m=s.joints.nose?.y??l.y+g*.35,p=s.joints.leftWrist,S=s.joints.rightWrist;if(p&&S){let y=p.y>m+g*.05,x=S.y>m+g*.05;r.handsUpRaised=y&&x,r.oneHandRaised=y&&S.y<l.y-g*.1||x&&p.y<l.y-g*.1}}else this.absentSince===null&&(this.absentSince=n),this.goodSince=null,this.lastCenterY=null,this.airborne=!1,this.crouching=!1,r.jumpCount=this.jumpCount,r.bodyX=this.centerXFilter.filter(.5,n),r.lateral=this.lastLateral,r.isCalibrated=!this.needsCalibration,this.lastHands=[null,null],this.handFilters.forEach(d=>d.reset());this.handsUp.update(r.handsUpRaised,this.handsUpHold,n)&&a.push("back");let h=this.thumbs.update(e&&!r.handsUpRaised,this.thumbsUpHold,n),u=this.raiseHand.update(r.oneHandRaised,this.raiseHandHold,n);return(h||u)&&(a.push("confirm"),this.thumbs.reset(!0),this.raiseHand.reset(!0)),r.handsUpProgress=this.handsUp.progress(this.handsUpHold,n),r.confirmProgress=Math.max(this.thumbs.progress(this.thumbsUpHold,n),this.raiseHand.progress(this.raiseHandHold,n)),{snap:r,events:a}}bridge(t,e){if(!t)return e-this.lastPoseTime<this.bridgeTime?this.lastPose:null;for(let[n,s]of Object.entries(this.jointSeen))!t.joints[n]&&e-s.t<this.bridgeTime&&(t.joints[n]=s.p);for(let[n,s]of Object.entries(t.joints))this.jointSeen[n]={p:s,t:e};return this.lastPose=t,this.lastPoseTime=e,t}calibrate(t,e,n,s,r){this.calibratedCenterX=t,this.refTorso=s,this.baseCenterY=(e.y+n.y)/2,this.baseHipY=n.y,this.baseNeckY=e.y,this.baseAnkleY=i.ankleY(r),this.crouching=!1,this.airborne=!1,this.calibrationRequested=!1,this.needsCalibration=!1}static ankleY(t){let e=t.joints.leftAnkle,n=t.joints.rightAnkle;return e&&n?Math.min(e.y,n.y):null}updateJumpAndCrouch(t,e,n,s,r,a,o){let l=(e.y+n.y)/2;if(this.baseCenterY===null)return;let c=(l-this.baseCenterY)/s,h=(n.y-this.baseHipY)/s,u=this.lastCenterY===null?0:(l-this.lastCenterY)/s/o;this.lastCenterY=l;let d=i.ankleY(t),f=d!==null&&this.baseAnkleY!==null?(d-this.baseAnkleY)/s:null;this.airborne?(c<.07||a-this.airborneSince>1.3)&&(this.airborne=!1,this.landedAt=a):a-this.landedAt>.25&&c>.17&&h>.12&&u>.9&&(f===null||f>.05||c>.3)&&(this.airborne=!0,this.airborneSince=a,this.jumpCount+=1,this.crouching=!1);let g=(this.baseHipY-n.y)/s,v=(this.baseNeckY-e.y)/s;if(this.airborne||(!this.crouching&&(g>.15&&v>.22||v>.5)?this.crouching=!0:this.crouching&&v<.14&&g<.1&&(this.crouching=!1)),this.airborne||this.crouching)return;let m=Math.abs(c)<.08&&Math.abs(u)<.5,p=1-Math.exp(-o/(m?.6:10));this.baseCenterY+=(l-this.baseCenterY)*p,this.baseHipY+=(n.y-this.baseHipY)*p,this.baseNeckY+=(e.y-this.baseNeckY)*p,d!==null&&(this.baseAnkleY=this.baseAnkleY===null?d:this.baseAnkleY+(d-this.baseAnkleY)*p),m&&this.refTorso!==null&&(this.refTorso+=(r-this.refTorso)*p)}hand(t,e,n,s,r,a,o){if(!e)return o-this.handLastSeen[t]<.25?this.lastHands[t]:(this.handFilters[t*2].reset(),this.handFilters[t*2+1].reset(),this.lastHands[t]=null,null);let l=Math.max(-1.3,Math.min(1.3,(e.x-n.x)*a/(r*1.7))),c=Math.max(-.4,Math.min(1.2,(e.y-s.y)/(r*2.3))),h={x:this.handFilters[t*2].filter(l,o),y:this.handFilters[t*2+1].filter(c,o)};return this.handLastSeen[t]=o,this.lastHands[t]=h,h}detectSwipe(t,e,n,s,r){let o=[0,0];if(["leftWrist","rightWrist"].forEach((l,c)=>{let h=t.joints[l];if(!h){this.swipeHistory[c]=[];return}let u=(h.x-e.x)*t.aspect/s,d=(h.y-n.y)/s,f=this.swipeHistory[c];for(f.push({t:r,x:u,y:d});f.length&&r-f[0].t>.4;)f.shift();let g=c===0?-1:1,v=f.reduce((m,p)=>p.x*g<m.x*g?p:m,f[0]);o[c]=(u-v.x)*g}),r<this.swipeCooldownUntil)return null;for(let l=0;l<2;l++){let c=this.swipeHistory[l];if(!c.length)continue;let h=c[c.length-1],u=l===0?-1:1,d=c.reduce((v,m)=>m.x*u<v.x*u?m:v,c[0]),f=o[l],g=f/Math.max(h.t-d.t,1/60);if(f>.85&&g>2&&h.x*u>.7&&d.x*u<.5&&h.y>.25&&h.y<2&&!(o[1-l]>.5))return this.swipeCooldownUntil=r+.6,this.swipeHistory=[[],[]],l===0?"swipeLeft":"swipeRight"}return null}static evaluateStatus(t){if(!t||!t.neckPoint||!(t.joints.leftShoulder||t.joints.rightShoulder))return We.noPerson;let e=t.neckPoint,n=t.hipCenter;if(!n)return We.tooClose;let s=t.distance(e,n);if(s>.4||n.y<.06)return We.tooClose;if(t.joints.nose&&t.joints.nose.y>.97)return We.tooClose;if(s<.1)return We.tooFar;let r=(e.x+n.x)/2;return r<.15?We.goRight:r>.85?We.goLeft:We.good}debounced(t){return t===this.status?(this.candidateFrames=0,this.status):(t===this.candidate?this.candidateFrames+=1:(this.candidate=t,this.candidateFrames=1),this.candidateFrames>=6&&(this.status=t,this.candidateFrames=0),this.status)}};var Pa=class{constructor(){this.interpreter=new Ca,this.snapshot=Ra(),this.listeners=new Set,this.snapshotListeners=new Set,this.kb={lane:null,laneUntil:0,jumps:0,crouchUntil:0,airborneUntil:0,activeUntil:0},this.simulateHands=!1}set handsUpHold(t){this.interpreter.handsUpHold=t}onEvent(t){return this.listeners.add(t),()=>this.listeners.delete(t)}onSnapshot(t){return this.snapshotListeners.add(t),()=>this.snapshotListeners.delete(t)}calibrate(){this.interpreter.requestCalibration()}resetGestures(){this.interpreter.resetGestures()}processPose(t,e,n){let{snap:s,events:r}=this.interpreter.process(t,e,n);this.snapshot=s;for(let a of this.snapshotListeners)a(s);for(let a of r)for(let o of this.listeners)o(a)}emit(t){for(let e of this.listeners)e(t)}get latest(){let t={...this.snapshot},e=performance.now()/1e3,n=this.kb;return t.jumpCount+=n.jumps,e<n.activeUntil&&(t.keyboardActive=!0),e<n.laneUntil&&n.lane!==null&&(t.lateral=n.lane,t.bodyX=.5+n.lane*.25),e<n.crouchUntil&&(t.isCrouching=!0),e<n.airborneUntil&&(t.isAirborne=!0),this.simulateHands&&(t.leftHand={x:-.55+.25*Math.sin(e*2.1),y:.62+.2*Math.cos(e*1.7)},t.rightHand={x:.5+.3*Math.cos(e*2.6),y:.55+.25*Math.sin(e*3.1)}),t}keyboardStep(t){let e=performance.now()/1e3,n=this.kb,s=e<n.laneUntil&&n.lane!==null?n.lane:0;n.lane=Math.max(-1,Math.min(1,s+t)),n.laneUntil=e+30,n.activeUntil=e+6}keyboardJump(){let t=performance.now()/1e3;this.kb.jumps+=1,this.kb.airborneUntil=t+.5,this.kb.activeUntil=t+6}keyboardCrouch(){let t=performance.now()/1e3;this.kb.crouchUntil=t+.7,this.kb.activeUntil=t+6}};var l_={nose:0,leftShoulder:11,rightShoulder:12,leftElbow:13,rightElbow:14,leftWrist:15,rightWrist:16,leftHip:23,rightHip:24,leftKnee:25,rightKnee:26,leftAnkle:27,rightAnkle:28},Ia=class{constructor(t,e){this.hub=t,this.assetBase=e,this.video=document.createElement("video"),this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0,this.stream=null,this.landmarker=null,this.running=!1,this.lastVideoTime=-1,this.lastCenter=null,this.state="idle",this.onState=()=>{}}setState(t,e){this.state=t,this.onState(t,e)}async listDevices(){return(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput")}async start(t){this.setState("starting");try{this.stream?.getTracks().forEach(e=>e.stop()),this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:t?{deviceId:{exact:t},width:{ideal:1280},height:{ideal:720}}:{facingMode:"user",width:{ideal:1280},height:{ideal:720}}})}catch(e){this.setState(e?.name==="NotAllowedError"?"denied":"error",e?.message);return}if(this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),!this.landmarker)try{let{FilesetResolver:e,PoseLandmarker:n}=await import("./chunks/vision_bundle-JHT6HPDM.js"),s=await e.forVisionTasks(this.assetBase+"mediapipe/wasm"),r=a=>({baseOptions:{modelAssetPath:this.assetBase+"mediapipe/pose_landmarker_lite.task",delegate:a},runningMode:"VIDEO",numPoses:2,minPoseDetectionConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n.createFromOptions(s,r("GPU"))}catch{this.landmarker=await n.createFromOptions(s,r("CPU"))}}catch(e){this.setState("error","Couldn't load body tracking: "+(e?.message??e));return}this.running=!0,this.setState("running"),this.loop()}get aspect(){return this.video.videoWidth&&this.video.videoHeight?this.video.videoWidth/this.video.videoHeight:16/9}loop(){if(!this.running)return;let t=()=>{if(!this.running)return;let e=this.video;if(e.readyState>=2&&e.currentTime!==this.lastVideoTime){this.lastVideoTime=e.currentTime;let n=performance.now(),s;try{s=this.landmarker.detectForVideo(e,n)}catch{s=null}this.hub.processPose(this.pickPose(s),!1,n/1e3)}e.requestVideoFrameCallback?e.requestVideoFrameCallback(t):requestAnimationFrame(t)};t()}pickPose(t){let e=t?.landmarks??[],n=null;for(let s of e){let r={};for(let[c,h]of Object.entries(l_)){let u=s[h];!u||(u.visibility??1)<.5||(r[c]={x:1-u.x,y:1-u.y})}if(r.leftShoulder&&r.rightShoulder&&(r.neck={x:(r.leftShoulder.x+r.rightShoulder.x)/2,y:(r.leftShoulder.y+r.rightShoulder.y)/2}),r.leftHip&&r.rightHip&&(r.root={x:(r.leftHip.x+r.rightHip.x)/2,y:(r.leftHip.y+r.rightHip.y)/2}),Object.keys(r).length<4)continue;let a=new ir(r,this.aspect),o=a.torsoLength??.01,l=a.neckPoint??Object.values(r)[0];if(this.lastCenter){let c=Math.hypot((l.x-this.lastCenter.x)*a.aspect,l.y-this.lastCenter.y);o*=Math.max(.35,1-c*2.5)}(!n||o>n.score)&&(n={pose:a,score:o,center:l})}return this.lastCenter=n?.center??null,n?.pose??null}stop(){this.running=!1,this.stream?.getTracks().forEach(t=>t.stop())}};function gu(i){window.MoveCamNative=window.MoveCamNative||{},window.MoveCamNative.pushPose=t=>{if(!t||!t.joints){i.processPose(null,!!t?.thumbsUp,t?.t??performance.now()/1e3);return}let e={};for(let[n,s]of Object.entries(t.joints))e[n]={x:s[0],y:s[1]};i.processPose(new ir(e,t.aspect||16/9),!!t.thumbsUp,t.t)}}var _u=()=>!!window.webkit?.messageHandlers?.movecam;function ws(i){try{window.webkit?.messageHandlers?.movecam?.postMessage(i)}catch{}}var c_=["coin","jump","hit","slice","splat","explosion","whistle","kick","save","cheer","groan","punch","beep","go","select","confirm","pause","gameover","gate","whoosh","combo"],La=class{constructor(t){this.base=t,this.ctx=null,this.buffers=new Map,this.music=new Map,this.current=null,this.ducked=!1,this.settings={sound:Xe("sound",!0),music:Xe("music",!0),volume:Xe("musicVolume",.6)}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.applyVolumes(),c_.forEach(e=>this.loadSound(e))}this.ctx.state==="suspended"&&this.ctx.resume()}async fetchBuffer(t){let n=await(await fetch(t)).arrayBuffer();return await this.ctx.decodeAudioData(n)}async loadSound(t){try{this.buffers.set(t,await this.fetchBuffer(`${this.base}sounds/${t}.wav`))}catch{}}play(t,e=1,n=1){if(!this.ctx||!this.settings.sound)return;let s=this.buffers.get(t);if(!s)return;let r=this.ctx.createBufferSource();r.buffer=s,r.playbackRate.value=n;let a=this.ctx.createGain();a.gain.value=e,r.connect(a).connect(this.sfxGain),r.start()}async playMusic(t){if(this.ducked=!1,!this.ctx)return;if(this.current?.name===t){this.applyVolumes();return}this.wanted=t;let e=this.music.get(t);if(!e){try{e=await this.fetchBuffer(`${this.base}music/music-${t}.m4a`)}catch{try{e=await this.fetchBuffer(`${this.base}music/music-${t}.ogg`)}catch{return}}if(this.music.set(t,e),this.music.size>3){for(let a of this.music.keys())if(a!=="menu"&&a!==t){this.music.delete(a);break}}}if(this.wanted!==t)return;let n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let s=this.ctx.createGain();s.gain.value=0,n.connect(s).connect(this.musicGain),n.start();let r=this.ctx.currentTime;if(s.gain.linearRampToValueAtTime(1,r+1.2),this.current){let a=this.current;a.gain.gain.cancelScheduledValues(r),a.gain.gain.setValueAtTime(a.gain.gain.value,r),a.gain.gain.linearRampToValueAtTime(0,r+1.2),a.source.stop(r+1.3)}this.current={name:t,source:n,gain:s},this.applyVolumes()}duck(t){this.ducked=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.settings.music?this.settings.volume*.75*(this.ducked?.3:1):0;this.musicGain.gain.cancelScheduledValues(t),this.musicGain.gain.setValueAtTime(this.musicGain.gain.value,t),this.musicGain.gain.linearRampToValueAtTime(e,t+.4),this.sfxGain.gain.value=this.settings.sound?1:0}set(t,e){this.settings[t]=e,Wn(t==="volume"?"musicVolume":t,e),this.applyVolumes()}};function Xe(i,t){try{let e=localStorage.getItem("movecam."+i);return e===null?t:JSON.parse(e)}catch{return t}}function Wn(i,t){try{localStorage.setItem("movecam."+i,JSON.stringify(t))}catch{}}var Ua=class{constructor(t){this.root=t,this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.el=document.createElement("div"),this.el.id="hud",this.banner=document.createElement("div"),this.banner.id="banner",this.banner.style.opacity="0",t.append(this.el,this.banner),this.token=0,this.render()}set(t){Object.assign(this.state,t),this.render()}reset(){this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.banner.style.opacity="0",this.render()}flash(t,e=1.2){let n=++this.token;this.banner.textContent=t,this.banner.style.opacity="1",setTimeout(()=>{this.token===n&&(this.banner.style.opacity="0")},e*1e3)}show(t){this.el.classList.toggle("hidden",!t),t||(this.banner.style.opacity="0")}render(){let t=this.state,e=[`<div class="stat"><div class="label">SCORE</div><div class="value">${t.score.toLocaleString()}</div></div>`];if(t.lives!==null){let n="";for(let s=0;s<t.maxLives;s++)n+=`<span class="${s<t.lives?"":"off"}">\u2665</span>`;e.push(`<div class="stat"><div class="label">LIVES</div><div class="hearts">${n}</div></div>`)}if(t.time!==null){let n=Math.floor(t.time/60),s=String(t.time%60).padStart(2,"0");e.push(`<div class="stat"><div class="label">TIME</div><div class="value" style="color:${t.time<=10?"var(--bad)":"#fff"}">${n}:${s}</div></div>`)}if(t.stat){let[n,...s]=t.stat.split(" ");e.push(`<div class="stat"><div class="label">${n.toUpperCase()}</div><div class="value">${s.join(" ")}</div></div>`)}this.el.innerHTML=e.join("")}};var on=class{constructor(t){this.ctx=t,this.hub=t.hub,this.audio=t.audio,this.hud=t.hud,this.scene=new fa,this.camera=new Ie(60,t.aspect(),.1,1200),this.elapsed=0,this.finished=!1,this.disposables=[]}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}idle(t){}start(){}update(t,e){}finish(t,e){this.finished||(this.finished=!0,this.audio.play("gameover"),setTimeout(()=>this.ctx.onFinished({score:Math.round(t),detail:e}),1e3))}dispose(){this.scene.traverse(t=>{t.geometry?.dispose?.();let e=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let n of e){for(let s of Object.values(n))s?.isTexture&&s.dispose();n.dispose()}})}};function xn(i=1){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var ot=(i,t)=>i+Math.random()*(t-i),Es=i=>i[Math.floor(Math.random()*i.length)],Ue=(i,t,e)=>Math.max(t,Math.min(e,i)),Qe=(i,t,e)=>i+(t-i)*e,fi=(i,t,e,n)=>Qe(i,t,1-Math.exp(-e*n));function Te(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new _s(r);return s&&(o.colorSpace=Fe),o.anisotropy=4,n&&(o.wrapS=o.wrapT=Pi,o.repeat.set(n[0],n[1])),o}function pi(i,t,{size:e=512,count:n=3e3,radius:s=6,seed:r=1,repeat:a=null,alpha:o=[.15,.5]}={}){let l=xn(r);return Te(e,e,(c,h,u)=>{c.fillStyle=i,c.fillRect(0,0,h,u);for(let d=0;d<n;d++){c.globalAlpha=o[0]+l()*(o[1]-o[0]),c.fillStyle=t[Math.floor(l()*t.length)];let f=(.4+l())*s,g=l()*h,v=l()*u;for(let m of[-h,0,h])for(let p of[-u,0,u])c.beginPath(),c.arc(g+m,v+p,f,0,Math.PI*2),c.fill()}c.globalAlpha=1},{repeat:a})}function ar(i,t,e=8,{repeat:n=null}={}){return Te(256,64,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=t;let o=r/e;for(let l=-2;l<e+2;l+=2)s.beginPath(),s.moveTo(l*o,0),s.lineTo(l*o+o,0),s.lineTo(l*o+o+a,a),s.lineTo(l*o+a,a),s.closePath(),s.fill()},{repeat:n})}function Ts(i="#ffffff"){return Te(64,64,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,i),n.addColorStop(.35,i),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)})}function at(i,{rough:t=.6,metal:e=0,map:n=null,emissive:s=null,emissiveIntensity:r=1,transparent:a=!1,opacity:o=1,side:l}={}){let c=new xs({color:i,roughness:t,metalness:e,map:n,transparent:a,opacity:o});return s&&(c.emissive=new Et(s),c.emissiveIntensity=r),l&&(c.side=l),c}function J(i,t,{x:e=0,y:n=0,z:s=0,cast:r=!0,receive:a=!1}={}){let o=new re(i,t);return o.position.set(e,n,s),o.castShadow=r,o.receiveShadow=a,o}function As(i,t=!0,e=!1){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function Rs({top:i,horizon:t,bottom:e,sunDir:n=null,sunColor:s="#fff6d8",sunSize:r=.04,radius:a=900}){let o={top:{value:new Et(i)},horizon:{value:new Et(t)},bottom:{value:new Et(e)},sunDir:{value:(n??new R(0,-1,0)).clone().normalize()},sunColor:{value:new Et(s)},sunSize:{value:r}},l=new rn({uniforms:o,side:Oe,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(horizon, bottom, pow(clamp(-h, 0.0, 1.0), 0.4));
        float d = max(dot(normalize(vDir), sunDir), 0.0);
        c += sunColor * (pow(d, 900.0 * (0.04 / sunSize)) * 2.5 + pow(d, 12.0) * 0.35);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),c=new re(new oe(a,32,16),l);return c.renderOrder=-1,c}function Da(i,{sun:t="#fff1d6",sunIntensity:e=2.6,sky:n="#bcd4ff",ground:s="#8a6a50",hemi:r=1.1,dir:a=[-.6,1,.5],shadowSize:o=40,shadowMap:l=2048}={}){let c=new An(n,s,r);i.add(c);let h=new ui(t,e);h.position.set(a[0]*40,a[1]*40,a[2]*40),h.castShadow=!0,h.shadow.mapSize.set(l,l);let u=o/2;return Object.assign(h.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.03,i.add(h,h.target),{hemi:c,sun:h}}function vu(i,t,e,n=[-24,40,20]){i.position.set(t+n[0],n[1],e+n[2]),i.target.position.set(t,0,e)}var Ee=class{constructor(t,{max:e=600,size:n=.25,texture:s=Ts(),additive:r=!1,gravity:a=-9.8}={}){this.max=e,this.gravity=a,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.cursor=0;let o=new _e;o.setAttribute("position",new ye(this.pos,3)),o.setAttribute("color",new ye(this.col,3)),this.material=new Qs({size:n,map:s,vertexColors:!0,transparent:!0,depthWrite:!1,blending:r?ls:ri,sizeAttenuation:!0,opacity:.95}),this.points=new ga(o,this.material),this.points.frustumCulled=!1;for(let l=0;l<e;l++)this.pos[l*3+1]=-9999;t.add(this.points)}burst(t,{count:e=30,speed:n=4,spread:s=1,up:r=.5,color:a="#ffffff",life:o=.8,colorJitter:l=.15,drag:c=.5,dir:h=null}={}){let u=new Et(a);for(let d=0;d<e;d++){let f=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[f*3]=t.x,this.pos[f*3+1]=t.y,this.pos[f*3+2]=t.z;let g=(Math.random()*2-1)*s,v=(Math.random()*2-1)*s+r,m=(Math.random()*2-1)*s;h&&(g+=h.x,v+=h.y,m+=h.z);let p=Math.hypot(g,v,m)||1,S=n*(.4+Math.random()*.8);this.vel[f*3]=g/p*S,this.vel[f*3+1]=v/p*S,this.vel[f*3+2]=m/p*S;let y=1+(Math.random()*2-1)*l;this.col[f*3]=u.r*y,this.col[f*3+1]=u.g*y,this.col[f*3+2]=u.b*y,this.life[f]=this.maxLife[f]=o*(.6+Math.random()*.8),this.drag[f]=c}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0)continue;if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-9999;continue}let n=Math.exp(-this.drag[e]*t);this.vel[e*3]*=n,this.vel[e*3+2]*=n,this.vel[e*3+1]=this.vel[e*3+1]*n+this.gravity*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.life[e]/this.maxLife[e]<.3&&(this.col[e*3]*=.92,this.col[e*3+1]*=.92,this.col[e*3+2]*=.92)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}shift(t){for(let e=0;e<this.max;e++)this.life[e]>0&&(this.pos[e*3+2]+=t)}};function Na(i="#b8643a",t=3){let e=pi(i,["#6b3a22","#d9895a","#8f5232","#5a2f1b"],{size:256,count:1600,radius:7,seed:t});return at("#ffffff",{rough:.95,map:e})}function or(i,t){let e=new Ui(i,1),n=e.attributes.position,s=xn(Math.floor(Math.random()*1e6));for(let a=0;a<n.count;a++){let o=.8+s()*.35;n.setXYZ(a,n.getX(a)*o,n.getY(a)*o*.75,n.getZ(a)*o)}e.computeVertexNormals();let r=J(e,t,{receive:!0});return r.rotation.y=Math.random()*Math.PI*2,r}function Mc(i=3){let t=new Lt,e=at("#3d7334",{rough:.7}),n=at("#2f5c28",{rough:.8});t.add(J(new Be(.24,i-.5,6,12),e,{y:i/2}));for(let s of[-1,1]){if(s===-1&&Math.random()<.4)continue;let r=i*ot(.3,.5),a=i*ot(.3,.45),o=J(new Be(.15,.4,4,10),n,{x:s*.35,y:r});o.rotation.z=Math.PI/2,t.add(o,J(new Be(.15,a,4,10),e,{x:s*.6,y:r+a/2}))}return As(t)}function Sc(i=6,t=!1){let e=new Lt,n=at("#4a2f1c",{rough:.9}),s=at(new Et().setHSL(.36,.45,ot(.16,.22)),{rough:.85}),r=at("#f4f8ff",{rough:.5});e.add(J(new jt(i*.04,i*.06,i*.3,8),n,{y:i*.15}));for(let a=0;a<4;a++){let o=i*(.34-.07*a),l=i*.36,c=i*.22+a*i*.16+l/2;e.add(J(new Tn(o,l,10),s,{y:c})),t&&e.add(J(new Tn(o*.62,l*.42,10),r,{y:c+l*.3}))}return As(e)}function xu(){let i=at("#ffc63a",{rough:.22,metal:1,emissive:"#5a3a00",emissiveIntensity:.6}),t=new Lt,e=J(new jt(.34,.34,.08,28),i);e.rotation.x=Math.PI/2;let n=J(new _n(.34,.04,8,28),i);return t.add(e,n),t}var ln=class{constructor(){this.amount=0}kick(t){this.amount=Math.max(this.amount,t)}apply(t,e){this.amount<=.001||(t.position.x+=(Math.random()*2-1)*this.amount,t.position.y+=(Math.random()*2-1)*this.amount,this.amount*=Math.exp(-e*9))}};var Fi=.95,Rn=class{constructor({shirt:t="#1e6ff2",accent:e="#ffffff",pants:n="#232323",skin:s="#d9a67f",hair:r="#2e1a0e",shoes:a="#ff5a33",gloves:o=null,number:l=null}={}){let c={shirt:at(t,{rough:.55}),accent:at(e,{rough:.5}),pants:at(n,{rough:.75}),skin:at(s,{rough:.5}),hair:at(r,{rough:.85}),shoes:at(a,{rough:.35}),sole:at("#f2f2f2",{rough:.6}),eye:at("#151515",{rough:.3}),glove:o?at(o,{rough:.3}):null};if(l!==null){let v=document.createElement("canvas");v.width=v.height=128;let m=v.getContext("2d");m.fillStyle=t,m.fillRect(0,0,128,128),m.fillStyle=e,m.font="bold 84px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText(String(l),64,70);let p=new _s(v);p.colorSpace=Fe,c.back=at("#ffffff",{rough:.55,map:p})}this.root=new Lt,this.hips=new Lt,this.hips.position.y=Fi,this.root.add(this.hips);let h=J(new Be(.15,.18,6,12),c.pants,{y:.02});h.rotation.z=Math.PI/2,h.scale.set(1,1,.8),this.hips.add(h),this.chest=new Lt,this.chest.position.y=.1,this.hips.add(this.chest);let u=J(new Be(.2,.34,8,16),c.shirt,{y:.26});u.scale.set(1.12,1,.72),this.chest.add(u);let d=J(new jt(.206,.206,.06,20),c.accent,{y:.2});if(d.scale.set(1.12,1,.73),this.chest.add(d),c.back){let v=J(new ae(.24,.24),c.back,{y:.32,z:.146});this.chest.add(v)}this.chest.add(J(new jt(.055,.06,.1,10),c.skin,{y:.56})),this.head=new Lt,this.head.position.y=.71,this.chest.add(this.head);let f=J(new oe(.125,20,16),c.skin);f.scale.set(.92,1.06,1),this.head.add(f);let g=J(new oe(.132,20,12,0,Math.PI*2,0,Math.PI*.55),c.hair,{y:.02,z:.012});g.scale.set(.95,1,1.02),this.head.add(g);for(let v of[-1,1])this.head.add(J(new oe(.016,8,8),c.eye,{x:v*.045,y:.01,z:-.112,cast:!1}));this.head.add(J(new oe(.03,8,8),c.skin,{y:-.02,z:-.122,cast:!1})),this.arms={};for(let v of["left","right"]){let m=v==="left"?-1:1,p=new Lt;p.position.set(.25*m,.46,0),this.chest.add(p),p.add(J(new oe(.078,12,10),c.shirt)),p.add(J(new Be(.06,.2,4,10),c.shirt,{y:-.14}));let S=new Lt;S.position.y=-.29,p.add(S),S.add(J(new Be(.052,.19,4,10),c.skin,{y:-.13}));let y=new Lt;if(y.position.y=-.29,S.add(y),c.glove){let x=J(new oe(.1,14,12),c.glove);x.scale.set(.9,1.05,1.15),y.add(x)}else y.add(J(new oe(.058,10,8),c.skin));this.arms[v]={shoulder:p,elbow:S,hand:y}}this.legs={};for(let v of["left","right"]){let m=v==="left"?-1:1,p=new Lt;p.position.set(.1*m,-.02,0),this.hips.add(p),p.add(J(new Be(.085,.31,4,10),c.pants,{y:-.21}));let S=new Lt;S.position.y=-.44,p.add(S),S.add(J(new Be(.068,.31,4,10),c.pants,{y:-.21})),S.add(J(new jt(.058,.062,.08,10),c.skin,{y:-.4}));let y=new Lt;y.position.set(0,-.46,-.04),S.add(y);let x=J(new pe(.12,.09,.27),c.shoes);y.add(x,J(new pe(.125,.03,.28),c.sole,{y:-.045})),this.legs[v]={hip:p,knee:S,foot:y}}this.root.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),this.run(0,0)}set(t,e=0,n=0,s=0){t.rotation.set(e,n,s)}run(t,e=1,n=.18){let s=Math.sin(t),r=Math.cos(t),{left:a,right:o}=this.legs;this.set(a.hip,s*.85*e),this.set(o.hip,-s*.85*e),this.set(a.knee,-(.15+1.1*Math.max(0,-r))*e),this.set(o.knee,-(.15+1.1*Math.max(0,r))*e),this.set(a.foot,.2*e*Math.max(0,s)),this.set(o.foot,.2*e*Math.max(0,-s));let l=this.arms;this.set(l.left.shoulder,-s*.8*e,0,-.08),this.set(l.right.shoulder,s*.8*e,0,.08),this.set(l.left.elbow,.3+1.2*e),this.set(l.right.elbow,.3+1.2*e),this.set(this.chest,-n*e,s*.12*e,0),this.set(this.hips,0,-s*.1*e,0),this.hips.position.y=Fi+Math.abs(r)*.06*e,this.set(this.head,n*.6*e)}jump(t){let{left:e,right:n}=this.legs,s=this.arms;this.set(e.hip,.9*t),this.set(n.hip,.5*t),this.set(e.knee,-1.4*t),this.set(n.knee,-1.1*t),this.set(s.left.shoulder,2.4*t,0,-.3*t),this.set(s.right.shoulder,2.4*t,0,.3*t),this.set(s.left.elbow,.3),this.set(s.right.elbow,.3),this.set(this.chest,-.1),this.hips.position.y=Fi}slide(){let{left:t,right:e}=this.legs,n=this.arms;this.hips.position.y=.35,this.set(this.hips),this.set(this.chest,.9),this.set(this.head,-.6),this.set(t.hip,1.3),this.set(e.hip,1),this.set(t.knee,-.2),this.set(e.knee,-.9),this.set(n.left.shoulder,.6,0,-.9),this.set(n.right.shoulder,.6,0,.9),this.set(n.left.elbow,.2),this.set(n.right.elbow,.2)}stumble(t){this.run(t*20,.6),this.set(this.chest,.5*Math.sin(t*6),0,.3*Math.sin(t*9))}ski(t,e){let n=.55+.45*t,{left:s,right:r}=this.legs,a=this.arms;this.hips.position.y=Fi-.18-.22*t,this.set(this.hips,0,0,-e*.25),this.set(s.hip,n),this.set(r.hip,n),this.set(s.knee,-n*1.6),this.set(r.knee,-n*1.6),this.set(s.foot,n*.6),this.set(r.foot,n*.6),this.set(this.chest,-.45-.4*t,0,e*.15),this.set(this.head,.4+.3*t),this.set(a.left.shoulder,.7+.5*t,0,-.25),this.set(a.right.shoulder,.7+.5*t,0,.25),this.set(a.left.elbow,.6),this.set(a.right.elbow,.6)}kick(t){let e=t<.5?t/.5:1-(t-.5)/.5,n=Math.max(0,(t-.5)/.5),{left:s,right:r}=this.legs,a=this.arms;this.set(r.hip,-.7*e+1.3*n),this.set(r.knee,-1.3*e-.1),this.set(s.hip,.15),this.set(s.knee,-.2),this.set(a.left.shoulder,.5*n,0,-.9),this.set(a.right.shoulder,-.4*n,0,.6),this.set(a.left.elbow,.3),this.set(a.right.elbow,.3),this.set(this.chest,-.2*e+.1*n),this.hips.position.y=Fi}celebrate(t){let{left:e,right:n}=this.legs,s=this.arms,r=Math.abs(Math.sin(t*8));this.hips.position.y=Fi+r*.12,this.set(e.hip,.1),this.set(n.hip,-.1),this.set(e.knee,-.2*r),this.set(n.knee,-.2*r),this.set(s.left.shoulder,2.8,0,-.4),this.set(s.right.shoulder,2.8,0,.4),this.set(s.left.elbow,.2),this.set(s.right.elbow,.2),this.set(this.chest,.1)}guard(t,e={left:0,right:0},n=0,s=0){let{left:r,right:a}=this.legs,o=this.arms,l=Math.sin(t*6)*.025;this.hips.position.y=Fi-.06-s*.32+l,this.set(this.hips,0,0,0),this.set(r.hip,.25+s*.6,0,-.1),this.set(a.hip,-.15+s*.6,0,.1),this.set(r.knee,-.35-s*1),this.set(a.knee,-.25-s*1),this.set(this.chest,-.15-s*.3,0,n*.4);for(let[c,h]of[["left",-1],["right",1]]){let u=e[c];this.set(o[c].shoulder,1.15+u*.45,0,h*(.35-u*.3)),this.set(o[c].elbow,2.1-u*2)}}};var bc=[-2.2,0,2.2],Xn=20,yu=10,ke=[{at:0,top:"#3d6fc4",horizon:"#ffb27a",bottom:"#8a5a3a",sun:"#fff0d0",sunI:2.8,hemi:1.15,fog:"#f2b58a",lamps:0},{at:900,top:"#2a3f8a",horizon:"#ff8a4a",bottom:"#6a3a2a",sun:"#ffb070",sunI:2.2,hemi:.9,fog:"#e08a5a",lamps:.3},{at:1800,top:"#0b1236",horizon:"#4a3a7a",bottom:"#1a1020",sun:"#9ab0ff",sunI:.9,hemi:.45,fog:"#2a2448",lamps:1}],Fa=class extends on{constructor(t){super(t),this.score=0,this.lives=3,this.coins=0,this.distance=0,this.speed=13,this.lane=1,this.px=0,this.py=0,this.vy=0,this.phase=0,this.lastJump=null,this.invulnerable=0,this.combo=0,this.powers={magnet:0,double:0,shield:!1},this.things=[],this.sinceSpawn=0,this.spawned=0,this.stumble=0,this.build()}build(){let t=this.scene;this.sky=Rs({top:ke[0].top,horizon:ke[0].horizon,bottom:ke[0].bottom,sunDir:new R(.2,.12,-1)}),t.add(this.sky),t.fog=new En(ke[0].fog,45,175),this.lights=Da(t,{sun:ke[0].sun,sunIntensity:ke[0].sunI,sky:"#bcd0ff",ground:"#a06a44",hemi:1.15,dir:[-.5,1,.4]}),this.camera.position.set(0,3.2,6.6),this.camera.lookAt(0,1.1,-6),this.camera.fov=62,this.M={road:at("#ffffff",{rough:.95,map:this.roadTexture()}),sand:at("#ffffff",{rough:1,map:pi("#dc9e66",["#b97a48","#f2c08a","#a8693c"],{seed:2,repeat:[6,2]})}),rock:Na("#b8643a",3),post:at("#eeeeee",{rough:.3,metal:.6}),hurdle:at("#ffffff",{rough:.45,map:ar("#ffffff","#e01818",8,{repeat:[3,1]})}),hazard:at("#ffffff",{rough:.6,map:ar("#ffd10d","#141414",12,{repeat:[3,1]})}),wood:at("#ffffff",{rough:.85,map:pi("#7a4a24",["#5a3416","#8f5c30"],{size:256,count:900,radius:4,seed:9})}),barrel:at("#a5402a",{rough:.5,metal:.3}),band:at("#333333",{rough:.4,metal:.8}),gap:at("#120804",{rough:1}),lamp:at("#ffd98a",{emissive:"#ffb347",emissiveIntensity:0})},this.tiles=[];for(let e=0;e<yu;e++){let n=new Lt;n.position.z=-e*Xn+10;let s=J(new ae(7.6,Xn),this.M.road,{cast:!1,receive:!0});s.rotation.x=-Math.PI/2,n.add(s);for(let a of[-1,1]){let o=J(new ae(70,Xn),this.M.sand,{x:a*38.8,y:-.02,cast:!1,receive:!0});o.rotation.x=-Math.PI/2,n.add(o)}let r=[];for(let a=0;a<3;a++)r.push(or(ot(.4,1.1),this.M.rock));r.push(Mc(ot(2.2,3.6))),Math.random()<.6&&r.push(Mc(ot(1.6,3)));for(let a=0;a<2;a++){let o=or(ot(6,10),this.M.rock);o.scale.set(1,ot(1.6,2.6),1.3),o.userData.wall=!0,r.push(o)}for(let a of[-1,1]){let o=new Lt;o.add(J(new jt(.05,.06,2.2,6),this.M.wood,{y:1.1})),o.add(J(new oe(.16,10,8),this.M.lamp,{y:2.25,cast:!1})),o.position.set(a*4.4,0,0),o.userData.lantern=!0,r.push(o)}r.forEach(a=>n.add(a)),this.scatter(r),n.userData.props=r,t.add(n),this.tiles.push(n)}for(let e=0;e<16;e++){let n=e%2?1:-1,s=ot(25,60),r=J(new jt(ot(18,36),ot(24,42),s,9),this.M.rock,{x:n*ot(60,170),y:s/2-2,z:-ot(220,320),cast:!1});t.add(r)}this.figure=new Rn({shirt:"#1e6ff2",accent:"#ffffff",pants:"#262626",shoes:"#ff5a33",number:7}),this.player=new Lt,this.player.add(this.figure.root),t.add(this.player),this.shield=new re(new oe(1.15,24,16),new Se({color:"#6fd3ff",transparent:!0,opacity:.18,depthWrite:!1})),this.shield.position.y=1,this.shield.visible=!1,this.player.add(this.shield),this.dust=new Ee(t,{max:400,size:.35,gravity:1.5,texture:Ts("#e8c39a")}),this.sparks=new Ee(t,{max:400,size:.22,gravity:-6,additive:!0}),this.shake=new ln,this.addCoinLine(1,-28,6);for(let e of[-62,-98,-132])this.spawnRow(e);this.hud.set({lives:3,maxLives:3,stat:"Coins 0"}),this.figure.run(0,0)}roadTexture(){return Te(256,512,(t,e,n)=>{t.fillStyle="#a8794f",t.fillRect(0,0,e,n);let s=xn(5);for(let r=0;r<3e3;r++){let a=.35+s()*.5;t.fillStyle=`rgba(${Math.round(255*a)},${Math.round(185*a)},${Math.round(125*a)},0.35)`;let o=1+s()*3;t.fillRect(s()*e,s()*n,o,o)}t.fillStyle="rgba(90,60,35,0.35)";for(let r of[.18,.32,.68,.82])t.fillRect(r*e-6,0,12,n);t.fillStyle="rgba(245,240,230,0.75)";for(let r of[.5-1.1/7.6,.5+1.1/7.6])for(let a=0;a<n;a+=128)t.fillRect(r*e-3,a+20,6,70)})}scatter(t){for(let e of t){if(e.userData.lantern){e.position.z=ot(-Xn/2,Xn/2);continue}let n=Math.random()<.5?-1:1,s=e.userData.wall?ot(20,34):ot(5.6,15);e.position.set(n*s,e.userData.wall?2:0,ot(-Xn/2,Xn/2))}}spawnRow(t=-150){this.spawned++;let e=Math.floor(Math.random()*3),n=Math.min(1,this.distance/2500),s=Math.random();if(this.spawned>3&&Math.random()<.12&&this.addPowerUp(e,t-6),s<.18)this.add("hurdle",[0,1,2],t),this.addCoinArc(e,t);else if(s<.32)this.add("bridge",[0,1,2],t),this.addCoinLine(e,t+3,3,.6);else if(s<.52){for(let r of[0,1,2])r!==e&&this.add(Math.random()<.5?"boulder":"barrels",[r],t);this.addCoinLine(e,t-4,5)}else if(s<.64&&this.distance>300)this.add("gap",[0,1,2],t),this.addCoinArc(1,t);else if(s<.82){let r=Math.floor(Math.random()*3);this.add("hurdle",[r],t),this.add(Math.random()<.5?"boulder":"barrels",[(r+1)%3],t),this.addCoinArc(r,t)}else this.add("boulder",[e],t,{rolling:n>.2}),this.addCoinLine((e+1)%3,t,6)}add(t,e,n,s={}){let r,a=this.M,o=e.length===3?0:bc[e[0]];switch(t){case"hurdle":{r=new Lt;let c=e.length===3?7:1.9;for(let h of[-1,1])r.add(J(new jt(.05,.05,.95,8),a.post,{x:h*c/2,y:.475})),r.add(J(new pe(.08,.05,.5),a.post,{x:h*c/2,y:.03}));r.add(J(new pe(c,.2,.08),a.hurdle,{y:.85}));break}case"bridge":{r=new Lt;for(let c of[-1,1])r.add(J(new pe(.5,3.4,.5),a.wood,{x:c*3.7,y:1.7}));r.add(J(new pe(7.9,.75,.35),a.hazard,{y:1.6})),r.add(J(new pe(8.4,.35,.6),a.wood,{y:3.4}));break}case"boulder":{r=J(new Ui(.95,2),a.rock),r.position.y=.92,r.userData.rolling=!!s.rolling;break}case"barrels":{r=new Lt;let c=new jt(.42,.42,1.1,16);for(let[h,u,d]of[[-.45,.55,0],[.45,.55,.1],[0,1.6,.05]]){let f=J(c,a.barrel,{x:h,y:u,z:d});for(let g of[-.35,.35])f.add(J(new _n(.425,.03,6,20),a.band,{y:g}));f.children.forEach(g=>g.rotation.x=Math.PI/2),r.add(f)}break}case"gap":{r=new Lt;let c=J(new ae(7.7,3.2),a.gap,{y:.01,cast:!1});c.rotation.x=-Math.PI/2,r.add(c);for(let h of[-1.6,1.6])r.add(J(new pe(7.8,.18,.25),a.rock,{y:.05,z:h}));break}case"coin":r=xu(),r.position.y=1;break;case"power":r=s.node;break}r.position.x=o,r.position.z=n,As(r,t!=="gap"),this.scene.add(r);let l={node:r,kind:t,lanes:e,resolved:!1,hinted:!1,power:s.power};return this.things.push(l),l}addCoinLine(t,e,n,s=1){for(let r=0;r<n;r++)this.add("coin",[t],e-r*2.2).node.position.y=s}addCoinArc(t,e){for(let n=-2;n<=2;n++)this.add("coin",[t],e+n*1.6).node.position.y=1+(2.2-Math.abs(n)*.6)}addPowerUp(t,e){let n=Es(["magnet","shield","double"]),s={magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"},r=new Lt,a=J(new Ui(.42,1),at(s[n],{rough:.2,metal:.3,emissive:s[n],emissiveIntensity:.9})),o=J(new _n(.62,.05,8,32),at("#ffffff",{emissive:"#ffffff",emissiveIntensity:.6})),l=new ma(new js({map:Te(128,128,c=>{c.font="bold 76px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff",c.fillText({magnet:"U",shield:"\u25C6",double:"2\xD7"}[n],64,70)}),depthTest:!1}));l.scale.set(.7,.7,1),r.add(a,o,l),r.position.y=1.3,this.add("power",[t],e,{node:r,power:n})}update(t,e){let n=this.elapsed;this.speed=Math.min(30,13+n*.2);let s=this.speed*t;this.distance+=s,this.sinceSpawn+=s;let r=e.lateral;r<-.55?this.lane=0:r>.55?this.lane=2:Math.abs(r)<.3&&(this.lane=1);let a=this.px;this.px=fi(this.px,bc[this.lane],12,t),this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001&&this.stumble<=0&&(this.vy=7.8,this.audio.play("jump",.7))),this.vy-=20*t,this.py=Math.max(0,this.py+this.vy*t),this.py===0&&(this.vy=0),this.sliding=e.isCrouching&&this.py===0,this.phase+=t*this.speed*.55,this.stumble>0?(this.stumble-=t,this.figure.stumble(this.stumble)):this.py>0?this.figure.jump(Math.min(1,this.py/.6)):this.sliding?this.figure.slide():this.figure.run(this.phase,1),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-(this.px-a)/Math.max(t,.001)*.04,this.py===0&&Math.random()<t*(this.sliding?40:14)&&this.dust.burst({x:this.px,y:.1,z:.3},{count:this.sliding?4:2,speed:1.5,up:1,life:.6,spread:.6,color:"#e2c09a"}),this.powers.magnet=Math.max(0,this.powers.magnet-t),this.powers.double=Math.max(0,this.powers.double-t),this.shield.visible=this.powers.shield,this.shield.visible&&(this.shield.material.opacity=.14+.06*Math.sin(n*6)),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let o=this.camera;o.position.set(this.px*.55,3.2+this.py*.25,6.6),o.fov=60+(this.speed-13)*.45,o.updateProjectionMatrix(),o.lookAt(this.px*.7,1.1,-6),this.shake.apply(o,t),this.updatePhaseColors();for(let c of this.tiles)c.position.z+=s,c.position.z-Xn/2>12&&(c.position.z-=Xn*yu,this.scatter(c.userData.props));this.sinceSpawn>Math.max(13,24-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let c=this.things.length-1;c>=0;c--){let h=this.things[c],u=h.node,d=u.userData.rolling?6*t:0;u.position.z+=s+d,h.kind==="boulder"&&(u.rotation.x+=(s+d)/.95),h.kind==="coin"&&(u.rotation.y+=t*4),h.kind==="power"&&(u.rotation.y+=t*2,u.position.y=1.3+Math.sin(n*4)*.15);let f=u.position.z;if(h.kind==="coin"&&!h.resolved){let g=Math.abs(f)<.9&&Math.abs(u.position.x-this.px)<.9&&Math.abs(u.position.y-(this.py+1))<1.3;this.powers.magnet>0&&f>-14&&f<1&&(u.position.x=fi(u.position.x,this.px,8,t),u.position.y=fi(u.position.y,this.py+1,8,t),u.position.z=fi(u.position.z,0,4,t)),g&&(h.resolved=!0,this.collectCoin(u))}else if(h.kind==="power"&&!h.resolved)Math.abs(f)<1&&Math.abs(u.position.x-this.px)<1.1&&(h.resolved=!0,this.collectPower(h));else if(!h.resolved&&f>-.5&&h.kind!=="coin"&&h.kind!=="power")h.resolved=!0,this.resolveObstacle(h);else if(!h.resolved&&!h.hinted&&this.spawned<=6&&f>-36&&h.kind!=="coin"&&h.kind!=="power"){h.hinted=!0;let g={hurdle:"Jump!",bridge:"Crouch!",gap:"Jump the gap!",boulder:"Change lanes!",barrels:"Change lanes!"}[h.kind];g&&(h.lanes.length===3||h.kind==="boulder"||h.kind==="barrels")&&this.hud.flash(g,.8)}(f>14||h.resolved&&(h.kind==="coin"||h.kind==="power"))&&(this.scene.remove(u),this.things.splice(c,1))}this.dust.shift(s),this.dust.update(t),this.sparks.update(t);let l=Math.floor(this.distance)+this.coins*10;l!==this.score&&(this.score=l,this.hud.set({score:l}))}idle(t){this.phase+=t*3,this.figure.run(this.phase,.15),this.dust.update(t)}updatePhaseColors(){let t=this.distance,e=ke[0],n=ke[0],s=0;for(let o=0;o<ke.length-1;o++)t>=ke[o].at&&(e=ke[o],n=ke[o+1],s=Math.min(1,(t-e.at)/(n.at-e.at)));t>=ke[ke.length-1].at&&(e=n=ke[ke.length-1],s=1);let r=(o,l)=>new Et(o).lerp(new Et(l),s),a=this.sky.material.uniforms;a.top.value.copy(r(e.top,n.top)),a.horizon.value.copy(r(e.horizon,n.horizon)),a.bottom.value.copy(r(e.bottom,n.bottom)),this.scene.fog.color.copy(r(e.fog,n.fog)),this.lights.sun.color.copy(r(e.sun,n.sun)),this.lights.sun.intensity=Qe(e.sunI,n.sunI,s),this.lights.hemi.intensity=Qe(e.hemi,n.hemi,s),this.M.lamp.emissiveIntensity=Qe(e.lamps,n.lamps,s)*3}resolveObstacle(t){if(!t.lanes.some(s=>Math.abs(bc[s]-this.px)<1.15)){this.cleared(t);return}let n;switch(t.kind){case"hurdle":n=this.py<.45;break;case"gap":n=this.py<.3;break;case"bridge":n=!this.sliding;break;default:n=!0}if(!n){this.cleared(t,!0);return}if(!(this.invulnerable>0)){if(this.powers.shield){this.powers.shield=!1,this.invulnerable=1,this.audio.play("save"),this.hud.flash("Shield saved you!",1),this.sparks.burst({x:this.px,y:1,z:0},{count:60,speed:6,color:"#6fd3ff",life:.7});return}this.lives-=1,this.combo=0,this.invulnerable=1.6,this.stumble=.6,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({lives:Math.max(0,this.lives),stat:`Coins ${this.coins}`}),this.lives<=0?(this.hud.flash("Wipeout!"),this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.coins} coins`)):this.hud.flash({hurdle:"Ouch \u2014 jump!",gap:"Fell in \u2014 jump!",bridge:"Ouch \u2014 crouch!"}[t.kind]??"Ouch \u2014 change lanes!")}}cleared(t,e=!1){if(!e)return;this.combo=Math.min(this.combo+1,20);let n=this.multiplier();this.combo%5===0&&(this.audio.play("combo",.7),this.hud.flash(`${this.combo} clean in a row \xB7 \xD7${n}`,.9)),this.hud.set({stat:`Coins ${this.coins}`})}multiplier(){return 1+Math.min(4,Math.floor(this.combo/5))}collectCoin(t){let e=(this.powers.double>0?2:1)*this.multiplier();this.coins+=e,this.audio.play("coin",.55,1+Math.min(.3,this.combo*.015)),this.sparks.burst(t.position,{count:8,speed:2.5,color:"#ffd75a",life:.4,spread:1}),this.hud.set({stat:`Coins ${this.coins}`})}collectPower(t){let e=t.power;e==="magnet"&&(this.powers.magnet=10),e==="double"&&(this.powers.double=10),e==="shield"&&(this.powers.shield=!0),this.audio.play("gate"),this.sparks.burst(t.node.position,{count:50,speed:5,color:{magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"}[e],life:.7}),this.hud.flash({magnet:"Coin magnet!",shield:"Shield up!",double:"Double coins!"}[e],1)}};var Cs={watermelon:{r:.95,skin:"#2f6b2a",flesh:"#f0364a",rind:"#e6f2c4",juice:"#ff3550",points:15,shape:[1.15,.92,.92]},orange:{r:.62,skin:"#ff8c12",flesh:"#ffa531",rind:"#fff1d4",juice:"#ff9a1a",points:10,shape:[1,1,1]},apple:{r:.6,skin:"#d4141c",flesh:"#fff3c9",rind:"#fffbe9",juice:"#fff5cc",points:10,shape:[1,.95,1]},lemon:{r:.55,skin:"#ffe01a",flesh:"#fff07a",rind:"#fffbe0",juice:"#fff04a",points:10,shape:[.85,.85,1.2]},kiwi:{r:.5,skin:"#7a5631",flesh:"#7fc23a",rind:"#cdea9a",juice:"#8fd640",points:12,shape:[.95,.95,1.15]},coconut:{r:.65,skin:"#5a3a22",flesh:"#fbfbf3",rind:"#3a2414",juice:"#ffffff",points:15,shape:[1,1.05,1]},pineapple:{r:.72,skin:"#d99a1e",flesh:"#ffe36a",rind:"#f7d24a",juice:"#ffe14a",points:20,shape:[.9,1.35,.9]}},h_=Object.keys(Cs),Oa=class extends on{constructor(t){super(t),this.score=0,this.lives=3,this.sliced=0,this.flyers=[],this.pieces=[],this.splats=[],this.spawnTimer=1,this.frenzy=0,this.comboCount=0,this.comboTimer=0,this.gravity=-14,this.build()}build(){let t=this.scene;t.background=new Et("#140c07"),this.camera.position.set(0,0,14),this.camera.fov=45,this.camera.lookAt(0,0,0);let e=Te(1024,1024,(a,o,l)=>{let c=xn(12),h=o/7;for(let u=0;u<8;u++){let d=.85+c()*.25;a.fillStyle=`rgb(${Math.round(120*d)},${Math.round(74*d)},${Math.round(40*d)})`,a.fillRect(u*h,0,h,l);for(let f=0;f<30;f++){a.strokeStyle=`rgba(60,32,14,${.15+c()*.25})`,a.lineWidth=1+c()*3,a.beginPath();let g=u*h+c()*h;a.moveTo(g,0);for(let v=0;v<l;v+=40)g+=(c()-.5)*6,a.lineTo(g,v);a.stroke()}a.fillStyle="rgba(25,12,4,.85)",a.fillRect(u*h-3,0,6,l)}});this.wall=J(new ae(40,24),at("#ffffff",{rough:.85,map:e}),{z:-3,cast:!1,receive:!0}),t.add(this.wall);let n=new An("#ffe6c8","#3a2010",1.2),s=new ui("#fff2dc",2.2);s.position.set(-6,8,12),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:10,bottom:-10,near:1,far:40});let r=new Ss("#ffb070",30,30);r.position.set(8,-4,6),t.add(n,s,r),this.juice=new Ee(t,{max:900,size:.28,gravity:-12}),this.sparks=new Ee(t,{max:500,size:.25,gravity:-2,additive:!0}),this.blades=[0,1].map(a=>{let l=new _e;l.setAttribute("position",new ye(new Float32Array(14*2*3),3)),l.setAttribute("color",new ye(new Float32Array(14*2*3),3));let c=[];for(let f=0;f<13;f++){let g=f*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}l.setIndex(c);let h=new re(l,new Se({vertexColors:!0,transparent:!0,blending:ls,depthWrite:!1,side:Le}));h.frustumCulled=!1;let u=new Et(a===0?"#6fd8ff":"#ff7ab8"),d=new re(new oe(.16,16,12),new Se({color:u}));return t.add(h,d),{ribbon:h,cursor:d,color:u,N:14,points:[],pos:null,speed:0}}),this.textures={},this.shake=new ln,this.flash=new re(new ae(60,40),new Se({color:"#ffffff",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.z=6,this.flash.renderOrder=10,t.add(this.flash),this.hud.set({lives:3,maxLives:3,stat:"Sliced 0"})}get halfHeight(){return Math.tan(ru.degToRad(this.camera.fov/2))*this.camera.position.z}get halfWidth(){return this.halfHeight*this.camera.aspect}handToWorld(t,e){let n=.5+t.x*.42+Ue(e,-1.5,1.5)*.1,s=.08+t.y*.86;return new R((Ue(n,0,1)*2-1)*this.halfWidth,(Ue(s,0,1)*2-1)*this.halfHeight,.5)}skinTexture(t){if(this.textures[t])return this.textures[t];let e=Cs[t],n=Te(512,256,(s,r,a)=>{s.fillStyle=e.skin,s.fillRect(0,0,r,a);let o=xn(t.length*7);if(t==="watermelon"){s.strokeStyle="#173d14",s.lineWidth=22;for(let l=0;l<10;l++){s.beginPath();let c=l*r/10;s.moveTo(c,0);for(let h=0;h<=a;h+=16)c+=Math.sin(h*.08+l)*4,s.lineTo(c,h);s.stroke()}}else if(t==="pineapple"){s.strokeStyle="#7a4a10",s.lineWidth=5;for(let l=-20;l<40;l++)s.beginPath(),s.moveTo(l*26,0),s.lineTo(l*26+a,a),s.stroke(),s.beginPath(),s.moveTo(l*26,a),s.lineTo(l*26+a,0),s.stroke()}else{let l={orange:["#e06a00",1800,2],kiwi:["#4a3018",3e3,1.5],coconut:["#2e1a0c",2500,2.5],lemon:["#e8c000",1200,1.6],apple:["#ffde4a",300,1.5]}[t];if(t==="apple"){let c=s.createLinearGradient(0,0,0,a);c.addColorStop(0,"#ff5a3a"),c.addColorStop(.5,"#d4141c"),c.addColorStop(1,"#7a0a10"),s.fillStyle=c,s.fillRect(0,0,r,a)}s.fillStyle=l[0];for(let c=0;c<l[1];c++)s.globalAlpha=.3+o()*.4,s.beginPath(),s.arc(o()*r,o()*a,l[2]*(.5+o()),0,Math.PI*2),s.fill();s.globalAlpha=1}});return this.textures[t]=n,n}fleshTexture(t){let e=t+":flesh";if(this.textures[e])return this.textures[e];let n=Cs[t],s=Te(256,256,(r,a)=>{let o=a/2;r.fillStyle=n.skin,r.beginPath(),r.arc(o,o,o,0,Math.PI*2),r.fill(),r.fillStyle=n.rind,r.beginPath(),r.arc(o,o,o*.93,0,Math.PI*2),r.fill(),r.fillStyle=n.flesh,r.beginPath(),r.arc(o,o,o*(t==="watermelon"?.82:.88),0,Math.PI*2),r.fill();let l=r.createRadialGradient(o*.7,o*.7,0,o,o,o);if(l.addColorStop(0,"rgba(255,255,255,.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=l,r.beginPath(),r.arc(o,o,o*.88,0,Math.PI*2),r.fill(),t==="orange"||t==="lemon"){r.strokeStyle=n.rind,r.lineWidth=3;for(let c=0;c<10;c++){let h=c/10*Math.PI*2;r.beginPath(),r.moveTo(o,o),r.lineTo(o+Math.cos(h)*o*.86,o+Math.sin(h)*o*.86),r.stroke()}}else if(t==="watermelon"){r.fillStyle="#1a0d0a";for(let c=0;c<14;c++){let h=c/14*Math.PI*2,u=o*(c%2?.45:.62);r.beginPath(),r.ellipse(o+Math.cos(h)*u,o+Math.sin(h)*u,4,7,h,0,Math.PI*2),r.fill()}}else if(t==="kiwi"){r.fillStyle="#f4ffe0",r.beginPath(),r.arc(o,o,o*.25,0,Math.PI*2),r.fill(),r.fillStyle="#111";for(let c=0;c<18;c++){let h=c/18*Math.PI*2;r.beginPath(),r.arc(o+Math.cos(h)*o*.38,o+Math.sin(h)*o*.38,3.5,0,Math.PI*2),r.fill()}}else if(t==="apple"){r.fillStyle="#6a3a14";for(let c of[-14,14])r.beginPath(),r.ellipse(o+c,o,5,9,0,0,Math.PI*2),r.fill()}else t==="pineapple"&&(r.fillStyle="#f2c63a",r.beginPath(),r.arc(o,o,o*.22,0,Math.PI*2),r.fill())});return this.textures[e]=s,s}makeFruit(t){let e=Cs[t],n=new Lt,s=J(new oe(e.r,32,20),at("#ffffff",{rough:t==="coconut"||t==="kiwi"?.9:.35,map:this.skinTexture(t)}));if(s.scale.set(...e.shape),n.add(s),t==="apple"||t==="orange"){n.add(J(new jt(.03,.04,.28,6),at("#5a3a1a"),{y:e.r*.98}));let r=J(new oe(.16,10,6),at("#3f9a2c",{rough:.5}),{x:.12,y:e.r*1.02});r.scale.set(1.2,.25,.6),n.add(r)}if(t==="pineapple"){let r=at("#3e8a2a",{rough:.6});for(let a=0;a<7;a++){let o=J(new Tn(.1,.8,5),r,{y:e.r*1.35+.3});o.rotation.z=(a-3)*.25,o.rotation.x=(a%2-.5)*.4,n.add(o)}}return n.userData.radius=e.r*Math.max(...e.shape),n}makeBomb(){let t=new Lt;t.add(J(new oe(.62,28,20),at("#141418",{rough:.25,metal:.6}))),t.add(J(new jt(.16,.18,.18,12),at("#555",{metal:.8,rough:.4}),{y:.64}));let e=J(new _n(.2,.035,6,12,Math.PI),at("#c9a26a"),{x:.2,y:.74});e.rotation.z=Math.PI,t.add(e);let n=Te(128,128,r=>{r.strokeStyle="#ff2b2b",r.lineWidth=16,r.beginPath(),r.moveTo(30,30),r.lineTo(98,98),r.moveTo(98,30),r.lineTo(30,98),r.stroke()}),s=new re(new ae(.6,.6),new Se({map:n,transparent:!0,depthWrite:!1}));return s.position.z=.63,t.add(s),t.userData.radius=.62,t.userData.fuseTip=new R(.4,.74,0),t}makeBanana(){let t=new Lt,e=new vs(new R(-.7,.1,0),new R(0,-.6,0),new R(.7,.1,0)),n=J(new Sa(e,24,.22,12),at("#ffd21a",{rough:.3,metal:.4,emissive:"#ffb800",emissiveIntensity:.6}));return t.add(n),t.userData.radius=.8,t.userData.golden=!0,t}showcase(){for(let t=0;t<6;t++)setTimeout(()=>this.launch(t===5?"bomb":"fruit"),t*90)}launch(t="fruit",e=0){let n,s=null;t==="bomb"?n=this.makeBomb():t==="banana"?n=this.makeBanana():(s=Es(h_),n=this.makeFruit(s));let r=this.halfWidth,a=this.halfHeight,o,l=-a-1.5,c,h;if(e)o=e*(r+1.5),l=ot(-a*.6,0),c=-e*ot(7,12),h=ot(6,10);else{o=ot(-r*.75,r*.75);let u=ot(.25,.85)*a*2;h=Math.sqrt(2*-this.gravity*u);let d=2*h/-this.gravity;c=(ot(-r*.5,r*.5)-o)/d}n.position.set(o,l,ot(-.5,.5)),n.rotation.set(Math.random()*6,Math.random()*6,0),this.scene.add(n),this.flyers.push({node:n,kind:s,type:t,vel:new R(c,h,0),spin:new R(ot(-3,3),ot(-3,3),ot(-2,2))}),t!=="bomb"&&this.audio.play("whoosh",.2,ot(.9,1.2))}spawnWave(){let t=this.elapsed,e=t<8?1:1+Math.floor(Math.random()*Math.min(5,2+t/20));for(let n=0;n<e;n++)setTimeout(()=>{if(this.finished)return;let s=t>10&&Math.random()<Math.min(.22,.08+t/400);this.launch(s?"bomb":"fruit")},n*160);t>20&&Math.random()<.06&&setTimeout(()=>this.launch("banana"),500)}update(t,e){this.updateBlades(t,e),this.frenzy>0?(this.frenzy-=t,this.frenzyTimer=(this.frenzyTimer??0)-t,this.frenzyTimer<=0&&(this.frenzyTimer=.18,this.launch("fruit",Math.random()<.5?-1:1)),this.frenzy<=0&&this.hud.flash("Frenzy over",.8)):(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnWave(),this.spawnTimer=Math.max(.8,1.9-this.elapsed*.012)*ot(.8,1.2)));let n=this.halfHeight;for(let s=this.flyers.length-1;s>=0;s--){let r=this.flyers[s];if(r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.y+=r.spin.y*t,r.node.rotation.z+=r.spin.z*t,r.type==="bomb"&&Math.random()<t*40){let a=r.userTip??new R;a.copy(r.node.userData.fuseTip).applyMatrix4(r.node.matrixWorld),this.sparks.burst(a,{count:2,speed:1.5,color:"#ffc04a",life:.25,up:1})}if(this.checkSlice(r)){this.flyers.splice(s,1);continue}r.node.position.y<-n-2.5&&r.vel.y<0&&(this.scene.remove(r.node),this.flyers.splice(s,1),r.type==="fruit"&&this.frenzy<=0&&this.loseLife("Missed one!"))}for(let s=this.pieces.length-1;s>=0;s--){let r=this.pieces[s];r.life-=t,r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.z+=r.spin.z*t,(r.life<=0||r.node.position.y<-n-4)&&(this.scene.remove(r.node),this.pieces.splice(s,1))}for(let s=this.splats.length-1;s>=0;s--){let r=this.splats[s];r.life-=t,r.node.material.opacity=Math.min(.8,r.life/1.5),r.node.scale.setScalar(Math.min(1,r.node.scale.x+t*8)),r.life<=0&&(this.scene.remove(r.node),r.node.material.dispose(),this.splats.splice(s,1))}if(this.juice.update(t),this.sparks.update(t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0)){if(this.comboCount>=3){let s=this.comboCount*5;this.addScore(s),this.audio.play("combo"),this.hud.flash(`${this.comboCount}-fruit combo  +${s}`,1)}this.comboCount=0}this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2.5),this.camera.position.set(0,0,14),this.shake.apply(this.camera,t)}idle(t){this.juice.update(t),this.sparks.update(t)}updateBlades(t,e){let n=this.elapsed;[e.leftHand,e.rightHand].forEach((s,r)=>{let a=this.blades[r];if(!s){a.pos=null,a.points=[],a.cursor.visible=!1,a.ribbon.visible=!1;return}let o=this.handToWorld(s,e.lateral);for(a.pos&&(a.speed=o.distanceTo(a.pos)/Math.max(t,.001)),a.prev=a.pos?a.pos.clone():o.clone(),a.pos=o,a.cursor.visible=!0,a.cursor.position.copy(o),a.points.push({p:o.clone(),t:n});a.points.length>a.N||a.points.length&&n-a.points[0].t>.16;)a.points.shift();let l=a.ribbon.geometry.attributes.position,c=a.ribbon.geometry.attributes.color,h=a.points.length;a.ribbon.visible=h>1&&a.speed>6;for(let u=0;u<a.N;u++){let d=a.points[Math.min(u,h-1)]?.p??o,f=a.points[Math.min(u+1,h-1)]?.p??d,g=new R().subVectors(f,d),v=new R(-g.y,g.x,0).normalize(),m=.18*(u/Math.max(h-1,1));l.setXYZ(u*2,d.x+v.x*m,d.y+v.y*m,d.z),l.setXYZ(u*2+1,d.x-v.x*m,d.y-v.y*m,d.z);let p=u/Math.max(h-1,1);for(let S of[u*2,u*2+1])c.setXYZ(S,a.color.r*p+p*.6,a.color.g*p+p*.6,a.color.b*p+p*.6)}l.needsUpdate=!0,c.needsUpdate=!0})}checkSlice(t){for(let e of this.blades){if(!e.pos||!e.prev||e.speed<9)continue;let n=t.node.userData.radius+.15;if(u_(e.prev,e.pos,t.node.position,n)){let s=new R().subVectors(e.pos,e.prev).normalize();return t.type==="bomb"?this.explode(t):this.slice(t,s),!0}}return!1}slice(t,e){this.scene.remove(t.node),this.sliced++,this.comboCount++,this.comboTimer=.35;let n=t.type==="banana",s=n?{juice:"#ffe14a",points:50}:Cs[t.kind];this.addScore(s.points*(this.frenzy>0?2:1)),this.audio.play("slice",.8,ot(.9,1.15)),this.audio.play("splat",.5),this.hud.set({stat:`Sliced ${this.sliced}`});let r=t.node.position.clone();if(this.juice.burst(r,{count:45,speed:7,spread:1,up:.3,color:s.juice,life:.8,colorJitter:.2}),n){this.frenzy=6,this.audio.play("combo"),this.hud.flash("FRUIT FRENZY! 2\xD7 points",1.4),this.sparks.burst(r,{count:120,speed:9,color:"#ffd84a",life:1});return}let a=t.kind,o=Cs[a],l=new R(-e.y,e.x,0).normalize(),c=at("#ffffff",{rough:.4,map:this.skinTexture(a)}),h=new xs({map:this.fleshTexture(a),roughness:.3});for(let d of[1,-1]){let f=new Lt,g=J(new oe(o.r,28,16,0,Math.PI*2,0,Math.PI/2),c),v=J(new hi(o.r,28),h,{cast:!1});v.rotation.x=Math.PI/2,f.add(g,v),f.scale.set(o.shape[0],o.shape[1],o.shape[2]);let m=new Lt;m.add(f),f.quaternion.setFromUnitVectors(new R(0,1,0),l.clone().multiplyScalar(d)),m.position.copy(r).addScaledVector(l,d*.1),this.scene.add(m);let p=t.vel.clone().multiplyScalar(.4).addScaledVector(l,d*ot(3,5)).add(new R(0,2,ot(1,3)));this.pieces.push({node:m,vel:p,spin:new R(ot(-4,4),0,d*ot(2,5)),life:2.5})}let u=new re(new ae(o.r*4,o.r*4),new Se({map:this.splatTexture(),color:o.juice,transparent:!0,opacity:.8,depthWrite:!1}));u.position.set(r.x,r.y,-2.95),u.rotation.z=Math.random()*Math.PI*2,u.scale.setScalar(.3),this.scene.add(u),this.splats.push({node:u,life:4})}splatTexture(){return this.textures.splat?this.textures.splat:(this.textures.splat=Te(256,256,(t,e)=>{let n=xn(4);t.fillStyle="#fff",t.beginPath(),t.arc(e/2,e/2,50,0,Math.PI*2),t.fill();for(let s=0;s<26;s++){let r=n()*Math.PI*2,a=30+n()*85,o=(6+n()*18)*(1-a/160);t.beginPath(),t.arc(e/2+Math.cos(r)*a,e/2+Math.sin(r)*a,o,0,Math.PI*2),t.fill()}}),this.textures.splat)}explode(t){this.scene.remove(t.node),this.audio.play("explosion"),this.flash.material.opacity=.9,this.shake.kick(.6),this.sparks.burst(t.node.position,{count:160,speed:11,color:"#ff9a2a",life:1}),this.juice.burst(t.node.position,{count:60,speed:6,color:"#333",life:1.2}),this.loseLife("Bomb!")}loseLife(t){this.lives-=1,this.audio.play("hit",.5),this.hud.set({lives:Math.max(0,this.lives)}),this.lives<=0?this.finish(this.score,`${this.sliced} fruit sliced`):this.hud.flash(t,.9)}addScore(t){this.score+=t,this.hud.set({score:this.score})}};function u_(i,t,e,n){let s=t.x-i.x,r=t.y-i.y,a=s*s+r*r,o=a>0?((e.x-i.x)*s+(e.y-i.y)*r)/a:0;return o=Math.max(0,Math.min(1,o)),Math.hypot(i.x+s*o-e.x,i.y+r*o-e.y)<n}var Ps=3.66,mi=2.44,Mu=new R(0,.11,-11),Ba=[{at:0,name:"Warm-up",time:1.35,curve:0,dip:0,power:0},{at:5,name:"Curlers",time:1.2,curve:1.2,dip:0,power:0},{at:10,name:"Chips & dips",time:1.1,curve:1.4,dip:.6,power:.15},{at:16,name:"Power shots",time:.95,curve:1.6,dip:.8,power:.3},{at:24,name:"World class",time:.85,curve:1.9,dip:1,power:.4}],ka=class extends on{constructor(t){super(t),this.score=0,this.lives=5,this.saves=0,this.shots=0,this.streak=0,this.stage="waiting",this.stageTime=0,this.level=0,this.launched=!1,this.ballVel=new R,this.build()}build(){let t=this.scene;this.sky=Rs({top:"#03061a",horizon:"#1c2550",bottom:"#0a120a"}),t.add(this.sky),t.fog=new En("#0d1430",60,160);let e=new An("#9fb4ff","#1a3a1a",.9);t.add(e);let n=new ui("#f4f7ff",2.4);n.position.set(-12,30,12),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:80}),n.target.position.set(0,0,-6),t.add(n,n.target);for(let x of[-30,30]){let C=new Ss("#e8eeff",400,90,1.6);C.position.set(x,26,-26),t.add(C)}this.camera.position.set(0,1.3,4.8),this.camera.fov=58,this.camera.lookAt(0,1.1,-6);let s=Te(512,512,(x,C,E)=>{for(let P=0;P<8;P++){let z=P%2?.86:1;x.fillStyle=`rgb(${Math.round(40*z)},${Math.round(128*z)},${Math.round(42*z)})`,x.fillRect(0,P*E/8,C,E/8)}let T=xn(21);for(let P=0;P<7e3;P++){let z=.3+T()*.4;x.fillStyle=`rgba(${Math.round(70*z)},${Math.round(255*z)},${Math.round(60*z)},0.22)`,x.fillRect(T()*C,T()*E,1.5,4)}},{repeat:[6,6]}),r=J(new ae(90,90),at("#ffffff",{rough:.9,map:s}),{z:-30,cast:!1,receive:!0});r.rotation.x=-Math.PI/2,t.add(r);let a=at("#f2f2f2",{rough:.8}),o=(x,C,E,T)=>{let P=J(new ae(E,T),a,{x,y:.01,z:C,cast:!1,receive:!0});P.rotation.x=-Math.PI/2,t.add(P)};o(0,0,60,.12),o(0,-5.5,18.3,.12),o(-9.15,-2.75,.12,5.5),o(9.15,-2.75,.12,5.5),o(0,-16.5,40.3,.12),o(-20.15,-8.25,.12,16.5),o(20.15,-8.25,.12,16.5),t.add(J(new hi(.15,16),a,{y:.012,z:-11,cast:!1}).rotateX(-Math.PI/2));let l=at("#f7f7f7",{rough:.25,metal:.2});for(let x of[-1,1])t.add(J(new jt(.06,.06,mi,12),l,{x:x*Ps,y:mi/2}));let c=J(new jt(.06,.06,Ps*2+.12,12),l,{y:mi});c.rotation.z=Math.PI/2,t.add(c);let h=Te(128,128,(x,C)=>{x.clearRect(0,0,C,C),x.strokeStyle="rgba(255,255,255,.8)",x.lineWidth=2;for(let E=0;E<=8;E++){let T=E*C/8;x.beginPath(),x.moveTo(T,0),x.lineTo(T,C),x.moveTo(0,T),x.lineTo(C,T),x.stroke()}});h.wrapS=h.wrapT=Pi;let u=(x,C)=>{let E=h.clone();return E.needsUpdate=!0,E.repeat.set(x,C),new Se({map:E,transparent:!0,side:Le,depthWrite:!1})},d=2;for(let x of[-1,1]){let C=new re(new ae(d,mi),u(d*3,mi*3));C.position.set(x*Ps,mi/2,d/2),C.rotation.y=Math.PI/2,t.add(C)}let f=new re(new ae(Ps*2,d),u(Ps*6,d*3));f.position.set(0,mi,d/2),f.rotation.x=-Math.PI/2,t.add(f);let g=Te(1024,256,(x,C,E)=>{x.fillStyle="#141414",x.fillRect(0,0,C,E);let T=xn(33),P=["#e53935","#ffffff","#1e88e5","#fdd835","#e8c4a0","#43a047","#555"];for(let z=0;z<16;z++)for(let _=0;_<128;_++){x.fillStyle=P[Math.floor(T()*P.length)];let w=_*8+T()*3,N=z*16+T()*4;x.beginPath(),x.arc(w+3,N+9,3.2,0,Math.PI*2),x.fill(),x.fillRect(w,N,6,7)}},{repeat:[4,1]}),v=at("#ffffff",{rough:.9,map:g,emissive:"#ffffff",emissiveIntensity:.12});v.emissiveMap=g;for(let x=0;x<3;x++){let C=J(new pe(150,9,1),v,{y:4+x*8,z:-48-x*7,cast:!1});C.rotation.x=-.5,t.add(C)}let m=["#ff2d75","#2d8cff","#ff8c1a","#1ad1c4"];for(let x=0;x<9;x++){let C=m[x%4];t.add(J(new pe(7.5,.9,.2),at(C,{rough:.3,emissive:C,emissiveIntensity:1.2}),{x:-35+x*7.8,y:.45,z:-24,cast:!1}))}let p=new Se({color:"#ffffff"}),S=at("#666",{rough:.4,metal:.8});for(let x of[-38,38]){t.add(J(new jt(.4,.5,30,8),S,{x,y:15,z:-40,cast:!1}));for(let C=0;C<3;C++)for(let E=0;E<4;E++)t.add(J(new oe(.6,10,8),p,{x:x-2.4+E*1.6,y:30+C*1.4,z:-39.5,cast:!1}))}let y=Te(512,256,(x,C,E)=>{x.fillStyle="#fff",x.fillRect(0,0,C,E),x.fillStyle="#151515";for(let T=0;T<3;T++)for(let P=0;P<6;P++){let z=(P+(T%2?.75:.25))*C/6,_=(T+.5)*E/3,w=T===1?26:18;x.beginPath();for(let N=0;N<5;N++){let k=N/5*Math.PI*2-Math.PI/2,V=z+Math.cos(k)*w,Z=_+Math.sin(k)*w;N?x.lineTo(V,Z):x.moveTo(V,Z)}x.closePath(),x.fill()}});this.ball=J(new oe(.11,24,16),at("#ffffff",{rough:.4,map:y})),this.ball.position.copy(Mu),t.add(this.ball),this.shooter=new Rn({shirt:"#d81b2a",accent:"#ffffff",pants:"#ffffff",skin:"#8c6046",hair:"#141414",shoes:"#19e07f",number:9}),this.shooter.root.rotation.y=Math.PI,this.shooter.root.position.set(.9,0,-14.2),t.add(this.shooter.root),this.gloves=[0,1].map(()=>{let x=new Lt,C=at("#f4f4f4",{rough:.5}),E=at("#22e07a",{rough:.4,emissive:"#0a5",emissiveIntensity:.4});x.add(J(new pe(.24,.28,.09),C));for(let P=0;P<4;P++)x.add(J(new Be(.032,.1,4,8),C,{x:-.09+P*.06,y:.19}));let T=J(new Be(.035,.08,4,8),C,{x:.15,y:.02});return T.rotation.z=-.7,x.add(T,J(new pe(.25,.08,.1),E,{y:-.15})),x.scale.setScalar(1.45),x.visible=!1,t.add(x),x}),this.sparks=new Ee(t,{max:500,size:.12,gravity:-4,additive:!0}),this.flashes=new Ee(t,{max:200,size:1.2,gravity:0,additive:!0}),this.trail=new Ee(t,{max:300,size:.25,gravity:.5,additive:!0}),this.shake=new ln,this.hud.set({lives:5,maxLives:5,stat:"Saves 0"})}update(t,e){switch(this.updateGloves(e),this.stageTime+=t,Math.random()<t*6&&this.flashes.burst({x:ot(-60,60),y:ot(4,22),z:ot(-62,-46)},{count:1,speed:0,life:.12,color:"#ffffff"}),this.stage){case"waiting":this.shooter.run(0,0),this.stageTime>1&&this.next("runUp");break;case"runUp":{let n=Math.min(1,this.stageTime/.8);this.shooter.root.position.set(Qe(.9,.35,n),0,Qe(-14.2,-11.5,n)),this.shooter.run(this.stageTime*11,.8),this.stageTime>=.8&&this.next("kick");break}case"kick":{let n=Math.min(1,this.stageTime/.4);this.shooter.kick(n),n>=.6&&!this.launched&&(this.launched=!0,this.launchShot()),this.stageTime>=.4&&(this.stage="flight",this.stageTime=0);break}case"flight":{let n=this.stageTime/this.shot.time,s=Math.sin(Math.PI*Math.min(n,1)),r=this.shot;this.ball.position.set(Qe(r.start.x,r.target.x,n)+r.curve*s,Math.max(.11,Qe(r.start.y,r.target.y,n)+r.arc*s-r.dip*Math.max(0,n-.6)*2),Qe(r.start.z,r.target.z,n)),this.ball.rotation.x-=t*25,this.ball.rotation.y+=t*r.curve*10,r.power&&this.trail.burst(this.ball.position,{count:3,speed:.4,color:"#ff7a1a",life:.3});let a=n>.78?this.touchingGlove():null;a?this.save(a):n>=1&&this.goal();break}default:if(this.ballVel.y-=9.8*t,this.ball.position.addScaledVector(this.ballVel,t),this.ball.position.y<.11&&(this.ball.position.y=.11,this.ballVel.y=Math.abs(this.ballVel.y)*.45,this.ballVel.x*=.7,this.ballVel.z*=.7),this.stage==="scored"&&this.ball.position.z>1.9&&(this.ball.position.z=1.9,this.ballVel.z=-Math.abs(this.ballVel.z)*.2),this.stage==="saved"&&this.shooter.run(0,0),this.stage==="scored"&&this.shooter.celebrate(this.stageTime),this.stageTime>1.8){if(this.lives<=0){this.finish(this.score,`${this.saves} saves from ${this.shots} shots`);return}this.resetShot()}}this.sparks.update(t),this.flashes.update(t),this.trail.update(t),this.camera.position.set(0,1.3,4.8),this.shake.apply(this.camera,t)}idle(t){this.flashes.update(t),this.sparks.update(t)}next(t){this.stage=t,this.stageTime=0,t==="runUp"&&this.audio.play("whistle",.5)}resetShot(){this.ball.position.copy(Mu),this.ball.rotation.set(0,0,0),this.launched=!1,this.shooter.root.position.set(.9,0,-14.2),this.next("waiting")}launchShot(){this.shots++;let t=0;for(let l=0;l<Ba.length;l++)this.saves>=Ba[l].at&&(t=l);t!==this.level&&(this.level=t,this.hud.flash(`Level ${t+1}: ${Ba[t].name}`,1.4));let e=Ba[t],n=Math.random()<e.power,s=Math.min(1,.55+this.shots*.04),r=ot(-1,1)*(Ps-.35)*s,a=ot(.25,mi-.25),o=Math.random()<e.dip*.4?ot(.3,.6):0;this.shot={start:this.ball.position.clone(),target:new R(r,a,0),time:e.time*(n?.75:1)*ot(.92,1.08),arc:o?1.4:a>1.5?ot(.3,.9):ot(0,.4),curve:ot(-1,1)*e.curve,dip:o,power:n},this.audio.play("kick",n?1:.8),n&&this.hud.flash("Power shot!",.6)}updateGloves(t){[t.leftHand,t.rightHand].forEach((e,n)=>{let s=this.gloves[n];if(!e){s.visible=!1;return}s.visible=!0;let r=Ue(e.x*3.1+Ue(t.lateral,-1.5,1.5)*1.6,-4.3,4.3),a=Ue(.2+e.y*2.6,.1,3);s.position.set(Qe(s.position.x,r,.55),Qe(s.position.y,a,.55),.25),s.rotation.z=-e.x*.5})}touchingGlove(){for(let t of this.gloves){if(!t.visible)continue;if(Math.hypot(t.position.x-this.ball.position.x,t.position.y-this.ball.position.y,(t.position.z-this.ball.position.z)*.5)<.5)return t}return null}save(t){this.saves++,this.streak++;let e=(100+(this.streak-1)*25)*(this.shot.power?2:1);this.score+=e,this.stage="saved",this.stageTime=0,this.ballVel.set(ot(-3,3)+(this.ball.position.x-t.position.x)*6,ot(2,5),-ot(6,10)),this.audio.play("save"),this.audio.play("cheer",.7),this.sparks.burst(this.ball.position,{count:50,speed:4,color:"#7dffa8",life:.6}),this.shake.kick(.08),this.hud.set({score:this.score,stat:`Saves ${this.saves}`}),this.hud.flash(this.streak>=3?`Save!  ${this.streak} in a row`:this.shot.power?"Huge save!":"Save!",1)}goal(){this.streak=0,this.lives--,this.stage="scored",this.stageTime=0;let t=this.shot;this.ballVel.set((t.target.x-t.start.x)/t.time,Math.max(-2,(t.target.y-t.start.y)/t.time),(t.target.z-t.start.z)/t.time),this.audio.play("groan",.8),this.hud.set({lives:Math.max(0,this.lives)}),this.hud.flash(this.lives>0?"Goal":"Full time!",1.2)}};var Oi=25,Su=9,za=class extends on{constructor(t){super(t),this.score=0,this.time=45,this.distance=0,this.speed=16,this.px=0,this.py=0,this.vy=0,this.gates=0,this.tricks=0,this.bonus=0,this.spin=0,this.spinning=!1,this.fromRamp=!1,this.lastJump=null,this.invulnerable=0,this.things=[],this.sinceSpawn=0,this.lastSecond=-1,this.build()}build(){let t=this.scene,e=new R(-.4,.45,-1);t.add(Rs({top:"#2a63c9",horizon:"#cfe0f5",bottom:"#eef3fa",sunDir:e,sunColor:"#fffbe8",sunSize:.03})),t.fog=new En("#d6e4f4",60,210),this.lights=Da(t,{sun:"#fff8ec",sunIntensity:2.2,sky:"#cfe0ff",ground:"#ffffff",hemi:.9,dir:[.5,1,.6]}),this.camera.position.set(0,4,7.4),this.camera.fov=64;let n=pi("#f4f8ff",["#d6e2f4","#ffffff","#e3ecf8"],{count:2600,radius:8,seed:41,repeat:[8,2]}),s=Te(256,256,(o,l,c)=>{o.fillStyle="#f7faff",o.fillRect(0,0,l,c),o.strokeStyle="rgba(170,195,230,.55)",o.lineWidth=3;for(let h=14;h<l;h+=24)o.beginPath(),o.moveTo(h,0),o.bezierCurveTo(h+20,c*.3,h-14,c*.7,h+6,c),o.stroke()},{repeat:[3,2]});this.M={piste:at("#ffffff",{rough:.55,map:s}),snow:at("#ffffff",{rough:.7,map:n}),rock:Na("#7d8796",14),red:at("#e0262b",{rough:.4}),blue:at("#1f5ae0",{rough:.4}),ramp:at("#ffffff",{rough:.35,map:ar("#f4f8ff","#2d7cf0",10,{repeat:[2,1]})}),mountain:at("#7c879a",{rough:.9}),cap:at("#ffffff",{rough:.6})},this.tiles=[];for(let o=0;o<Su;o++){let l=new Lt;l.position.z=-o*Oi+12;let c=J(new ae(20,Oi),this.M.piste,{cast:!1,receive:!0});c.rotation.x=-Math.PI/2,l.add(c);for(let u of[-1,1]){let d=J(new ae(80,Oi),this.M.snow,{x:u*50,y:-.01,cast:!1,receive:!0});d.rotation.x=-Math.PI/2,l.add(d)}let h=[];for(let u=0;u<7;u++){let d=Sc(ot(4,9),!0);h.push(d),l.add(d)}this.scatterTrees(h),l.userData.trees=h,t.add(l),this.tiles.push(l)}for(let o=0;o<10;o++){let l=ot(60,120),c=l*ot(.8,1.2),h=(o-4.5)*55+ot(-15,15),u=-ot(250,330);t.add(J(new Tn(c,l,7),this.M.mountain,{x:h,y:l/2-5,z:u,cast:!1})),t.add(J(new Tn(c*.42,l*.42,7),this.M.cap,{x:h,y:l-5-l*.21+.4,z:u,cast:!1}))}this.figure=new Rn({shirt:"#f0353c",accent:"#ffd61a",pants:"#1b2140",skin:"#e8b89a",hair:"#2f6fe8",shoes:"#222"});let r=at("#ff7a12",{rough:.25,metal:.3}),a=at("#c8c8c8",{rough:.3,metal:.9});for(let o of["left","right"]){let l=this.figure.legs[o].foot;l.add(J(new pe(.1,.03,1.7),r,{y:-.07,z:-.25}));let c=J(new pe(.1,.03,.22),r,{y:-.02,z:-1.14});c.rotation.x=.5,l.add(c);let h=J(new jt(.012,.012,1.15,6),a,{y:-.5,z:.15});h.rotation.x=-.3,this.figure.arms[o].hand.add(h)}this.player=new Lt,this.player.add(this.figure.root),t.add(this.player),this.snow=new Ee(t,{max:900,size:.12,gravity:-1.2,texture:Ts("#ffffff")}),this.spray=new Ee(t,{max:600,size:.3,gravity:-5,texture:Ts("#ffffff")}),this.sparks=new Ee(t,{max:300,size:.2,gravity:-4,additive:!0}),this.shake=new ln;for(let o=0;o<4;o++)this.spawnRow(-60-o*32);this.hud.set({time:45,stat:"Gates 0"})}scatterTrees(t){for(let e of t){let n=Math.random()<.5?-1:1;e.position.set(n*ot(11,36),0,ot(-Oi/2,Oi/2))}}spawnRow(t=-170){let e=ot(-5.5,5.5),n=Math.random()<.5,s=new Lt;for(let a of[-1,1]){s.add(J(new jt(.045,.045,1.9,8),n?this.M.red:this.M.blue,{x:a*2.1,y:.95}));let o=J(new ae(.75,.5),n?this.M.red:this.M.blue,{x:a*2.1-a*.4,y:1.5});o.material.side=Le,s.add(o)}if(s.position.set(e,0,t),As(s),this.scene.add(s),this.things.push({node:s,kind:"gate"}),this.distance>120&&Math.random()<.35){let a=Ue(e+(e>0?-5:5),-7,7),o=J(new pe(2.4,.12,3.2),this.M.ramp,{x:a,y:.45,z:t-14});o.rotation.x=.28,this.scene.add(o),this.things.push({node:o,kind:"ramp"})}let r=this.distance<80?0:1+Math.floor(Math.random()*Math.min(3,1+this.distance/600));for(let a=0;a<r;a++){let o=ot(-8,8);if(Math.abs(o-e)<3&&(o=e+(o<e?-3.5:3.5)),Math.abs(o)>9)continue;let l=t+ot(-10,10);if(Math.random()<.35){let c=or(.6,this.M.rock);c.scale.set(1.3,.6,1),c.position.set(o,.2,l),this.scene.add(c),this.things.push({node:c,kind:"rock"})}else{let c=Sc(ot(3,5.5),!0);c.position.set(o,0,l),this.scene.add(c),this.things.push({node:c,kind:"tree"})}}}update(t,e){let n=this.elapsed;this.time-=t;let s=Math.max(0,Math.ceil(this.time));if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=5&&s>0&&this.audio.play("beep",.6)),this.time<=0){this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.gates} gates \xB7 ${this.tricks} tricks`);return}let r=e.isCrouching&&this.py===0,a=Math.min(34,16+n*.2);this.speed=fi(this.speed,r?a*1.3:a,2,t);let o=this.speed*t;this.distance+=o,this.sinceSpawn+=o,r&&(this.bonus+=t*10);let l=Ue(e.lateral*6,-8.5,8.5),c=this.px;this.px=fi(this.px,l,4,t);let h=Ue((this.px-c)/Math.max(t,.001)/6,-1,1);this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001?(this.vy=7.5,this.audio.play("whoosh",.7)):this.fromRamp&&!this.spinning&&(this.spinning=!0,this.audio.play("whoosh",.8,1.3))),(this.py>0||this.vy>0)&&(this.vy-=17*t,this.py=Math.max(0,this.py+this.vy*t),this.spinning&&(this.spin+=t*14),this.py===0&&this.land()),this.figure.ski(r?1:0,h),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-h*.35+this.spin,this.py===0&&this.spray.burst({x:this.px,y:.15,z:.5},{count:Math.round(1+Math.abs(h)*6),speed:2.5+Math.abs(h)*3,up:1.2,spread:.6,life:.5,color:"#ffffff"}),Math.random()<t*60&&this.snow.burst({x:this.px+ot(-20,20),y:12,z:ot(-40,4)},{count:1,speed:1.5,spread:.3,up:-1,life:6,drag:.2,color:"#ffffff"}),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let d=this.camera;d.position.set(this.px*.6,4+this.py*.3,7.4),d.fov=62+(this.speed-16)*.4,d.updateProjectionMatrix(),d.lookAt(this.px*.7,.8,-8),this.shake.apply(d,t),vu(this.lights.sun,this.px,-6,[20,40,24]);for(let g of this.tiles)g.position.z+=o,g.position.z-Oi/2>14&&(g.position.z-=Oi*Su,this.scatterTrees(g.userData.trees));this.sinceSpawn>Math.max(22,34-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let g=this.things.length-1;g>=0;g--){let v=this.things[g];v.node.position.z+=o;let m=v.node.position.z;!v.done&&m>-.4&&(v.done=!0,this.resolve(v)),m>16&&(this.scene.remove(v.node),this.things.splice(g,1))}this.snow.shift(o*.3),this.snow.update(t),this.spray.shift(o),this.spray.update(t),this.sparks.update(t);let f=Math.floor(this.distance+this.gates*50+this.bonus);f!==this.score&&(this.score=f,this.hud.set({score:f}))}idle(t){this.figure.ski(0,0),this.snow.update(t)}land(){if(this.vy=0,this.spinning){let t=Math.round(this.spin/(Math.PI*2)),e=150+t*100;this.tricks++,this.bonus+=e,this.audio.play("combo"),this.hud.flash(`${t>0?t*360:180}\xB0 spin  +${e}`,1)}else this.fromRamp&&(this.bonus+=50,this.hud.flash("Big air  +50",.7));this.spin=0,this.spinning=!1,this.fromRamp=!1}resolve(t){let e=Math.abs(t.node.position.x-this.px);switch(t.kind){case"gate":e<2?(this.gates++,this.time+=2,this.audio.play("gate",.7),this.sparks.burst({x:t.node.position.x,y:1.5,z:0},{count:30,speed:4,color:"#9fd8ff",life:.6}),this.hud.set({stat:`Gates ${this.gates}`,time:Math.ceil(this.time)}),this.hud.flash("Gate  +2s",.6)):this.hud.flash("Missed the gate",.7);break;case"ramp":e<1.4&&this.py<.3&&(this.vy=10,this.py=.01,this.fromRamp=!0,this.audio.play("whoosh"),this.hud.flash("Jump for a spin!",.8));break;case"tree":e<.9&&this.py<2.5&&this.crash("Hit a tree  \u22123s");break;case"rock":e<1&&this.py<.35&&this.crash("Rock  \u22123s \xB7 jump next time");break}}crash(t){this.invulnerable>0||(this.invulnerable=1.6,this.time-=3,this.speed*=.4,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({time:Math.max(0,Math.ceil(this.time))}),this.hud.flash(t))}};var bu=75,Ha=class extends on{constructor(t){super(t),this.score=0,this.hits=0,this.combo=0,this.pads=[],this.padTimer=.8,this.attack=null,this.attackTimer=12,this.lastSecond=-1,this.recoil=0,this.punch={left:0,right:0},this.build()}build(){let t=this.scene;t.background=new Et("#07060b"),t.fog=new En("#07060b",12,40),this.camera.position.set(0,1.6,1.9),this.camera.fov=60,this.camera.lookAt(0,1.4,-2),t.add(new An("#8a7aff","#1a0f0a",.5));for(let[o,l]of[[-3,"#ffe2c4"],[3,"#ffe2c4"],[0,"#ffffff"]]){let c=new wa(l,160,30,.5,.6,1.5);c.position.set(o,9,1),c.target.position.set(0,0,-2),c.castShadow=o===0,c.shadow.mapSize.set(1024,1024),t.add(c,c.target)}let e=pi("#2a3c78",["#22336a","#334a8a"],{count:900,radius:10,seed:5,repeat:[3,3]}),n=J(new ae(12,12),at("#ffffff",{rough:.8,map:e}),{z:-2,cast:!1,receive:!0});n.rotation.x=-Math.PI/2,t.add(n);let s=at("#d8d8d8",{rough:.3,metal:.6});for(let o of[-5,5])for(let l of[-7,3])t.add(J(new jt(.12,.12,1.6,10),s,{x:o,y:.8,z:l}));["#e53935","#f5f5f5","#1e5ae5"].forEach((o,l)=>{let c=at(o,{rough:.4}),h=.55+l*.4;for(let[u,d,f,g]of[[-5,-7,5,-7],[-5,-7,-5,3],[5,-7,5,3]]){let v=Math.hypot(f-u,g-d),m=J(new jt(.035,.035,v,8),c,{x:(u+f)/2,y:h,z:(d+g)/2,cast:!1});m.rotation.z=Math.PI/2,m.rotation.y=Math.atan2(g-d,f-u)*-1,t.add(m)}});let a=new Ee(t,{max:120,size:1.6,gravity:0,additive:!0});for(let o=0;o<120;o++)a.burst({x:ot(-25,25),y:ot(1,9),z:ot(-30,-14)},{count:1,speed:0,life:1e9,color:Math.random()<.5?"#4a3020":"#20304a"});a.update(0),this.coach=new Rn({shirt:"#222",accent:"#ffcf3a",pants:"#141414",skin:"#b07a55",hair:"#111",shoes:"#111",gloves:"#e2182a"}),this.coach.root.position.set(0,0,-1.9),this.coach.root.rotation.y=Math.PI,t.add(this.coach.root),this.gloves=["#2563eb","#e2182a"].map(o=>{let l=new Lt,c=at(o,{rough:.25,metal:.1}),h=J(new oe(.16,20,16),c);h.scale.set(.95,1,1.2);let u=J(new oe(.07,12,10),c,{x:.1,y:-.04,z:-.04}),d=J(new jt(.1,.11,.16,14),at(new Et(o).multiplyScalar(.45),{rough:.5}),{z:.18}),f=J(new _n(.105,.012,6,20),at("#f2f2f2",{rough:.5}),{z:.2});return l.add(f),d.rotation.x=Math.PI/2,l.add(h,u,d),l.visible=!1,t.add(l),{node:l,pos:null,speed:0}}),this.padMat=at("#ff3b30",{rough:.4,emissive:"#ff2a1a",emissiveIntensity:.6}),this.padRingMat=new Se({color:"#ffd84a",transparent:!0,opacity:.9,side:Le}),this.sparks=new Ee(t,{max:600,size:.08,gravity:-3,additive:!0}),this.shake=new ln,this.flash=new re(new ae(10,6),new Se({color:"#ff1a1a",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.set(0,1.6,1.8),this.flash.renderOrder=10,t.add(this.flash),this.hud.set({time:bu,lives:null,stat:"Combo 0"})}handToWorld(t,e){return new R(Ue(t.x*1.15+Ue(e,-1.5,1.5)*.25,-1.4,1.4),Ue(.75+t.y*1.35,.6,2.4),.35)}update(t,e){let n=Math.max(0,bu-this.elapsed),s=Math.ceil(n);if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=3&&s>0&&this.audio.play("beep",.6)),n<=0){this.finish(this.score,`${this.hits} punches landed`);return}[e.leftHand,e.rightHand].forEach((l,c)=>{let h=this.gloves[c];if(!l){h.node.visible=!1,h.pos=null;return}let u=this.handToWorld(l,e.lateral);h.pos&&(h.speed=u.distanceTo(h.pos)/Math.max(t,.001)),h.pos=u,h.node.visible=!0,h.lunge=Math.max(0,(h.lunge??0)-t*5);let d=u.clone();d.z-=h.lunge*1.2,h.node.position.lerp(d,.6),h.node.rotation.z=(c===0?1:-1)*.3}),this.padTimer-=t,this.padTimer<=0&&!this.attack&&(this.spawnPad(),this.padTimer=Math.max(.45,1.15-this.elapsed*.009));for(let l=this.pads.length-1;l>=0;l--){let c=this.pads[l];c.age+=t;let h=Math.max(0,1-c.age/c.life);c.ring.scale.setScalar(1+h*1.2),c.ring.material.color.set(h>.35?"#ffd84a":"#ff3b30"),c.node.scale.setScalar(Math.min(1,c.age*8));let u=this.gloves.find(d=>d.pos&&d.speed>3&&this.overlapOnScreen(d.node.position,c.node.position));if(u){u.lunge=1,this.hitPad(c,h),this.pads.splice(l,1);continue}c.age>=c.life&&(this.combo=0,this.hud.set({stat:"Combo 0"}),this.scene.remove(c.node),this.pads.splice(l,1))}this.updateAttack(t,e),this.recoil=Math.max(0,this.recoil-t*3);let r=this.attack,a={left:0,right:0},o=0;if(r){let l=r.time/r.windup;r.stage==="windup"?o=r.side*.4*Math.min(1,l):a[r.side<0?"left":"right"]=Math.min(1,r.time/.25)}this.coach.guard(this.elapsed,a,o,0),this.coach.root.position.z=-1.9-this.recoil*.25,this.sparks.update(t),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2),this.camera.position.set(Ue(e.lateral,-1.5,1.5)*.25,1.6-(e.isCrouching?.45:0),1.9),this.camera.lookAt(0,1.4,-2),this.shake.apply(this.camera,t)}idle(t){this.coach.guard(this.elapsed+performance.now()/1e3),this.sparks.update(t)}overlapOnScreen(t,e){let n=t.clone().project(this.camera),s=e.clone().project(this.camera);return Math.hypot((n.x-s.x)*this.camera.aspect,n.y-s.y)<.16}spawnPad(){let e=[[-.45,1.75],[.45,1.75],[-.55,1.3],[.55,1.3],[0,1.95],[-.3,1.05],[.3,1.05]].filter(([c,h])=>!this.pads.some(u=>Math.hypot(u.node.position.x-c,u.node.position.y-h)<.3));if(!e.length)return;let[n,s]=Es(e),r=new Lt,a=J(new jt(.17,.17,.09,24),this.padMat);a.rotation.x=Math.PI/2;let o=J(new hi(.08,20),new Se({color:"#ffffff"}),{z:.05,cast:!1}),l=new re(new Ma(.2,.235,32),this.padRingMat.clone());l.position.z=.06,r.add(a,o,l),r.position.set(n,s,-1.15),this.scene.add(r),this.pads.push({node:r,ring:l,age:0,life:Math.max(1.1,2.3-this.elapsed*.014)})}hitPad(t,e){this.hits++,this.combo++;let n=1+Math.min(4,Math.floor(this.combo/5)),s=(50+Math.round(e*50))*n;this.score+=s,this.recoil=1,this.audio.play("punch",1,ot(.9,1.1)),this.combo%10===0&&(this.audio.play("combo"),this.hud.flash(`${this.combo}-hit combo!`)),this.sparks.burst(t.node.position,{count:40,speed:4,color:"#ffcf5a",life:.5}),this.shake.kick(.04),this.scene.remove(t.node),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})}updateAttack(t,e){if(!this.attack){if(this.attackTimer-=t,this.attackTimer<=0&&this.elapsed>8){let s=Math.random()<.5?"hook":"swing";this.attack={kind:s,side:Math.random()<.5?-1:1,stage:"windup",time:0,windup:Math.max(.6,1-this.elapsed*.004)},this.hud.flash(s==="swing"?"Duck!":this.attack.side<0?"Slip right!":"Slip left!",.9),this.audio.play("whistle",.35);for(let r of this.pads)this.scene.remove(r.node);this.pads=[]}return}let n=this.attack;n.time+=t,n.stage==="windup"&&n.time>=n.windup&&(n.stage="strike",n.time=0),n.stage==="strike"&&n.time>=.18&&!n.resolved&&(n.resolved=!0,(n.kind==="swing"?e.isCrouching:(n.side<0?e.lateral>.35:e.lateral<-.35)||e.isCrouching)?(this.score+=150,this.audio.play("whoosh"),this.hud.flash("Nice dodge  +150",.9)):(this.score=Math.max(0,this.score-100),this.combo=0,this.flash.material.opacity=.5,this.shake.kick(.18),this.audio.play("hit"),this.hud.flash("Caught one  \u2212100",.9)),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})),n.stage==="strike"&&n.time>.5&&(this.attack=null,this.attackTimer=ot(6,10))}};var Kn=[{id:"canyonRun",title:"Canyon Run",tagline:"Sprint from sunset into the night",moves:["Step left / right to switch lanes","Jump hurdles and gaps","Crouch under bridges","Grab magnets, shields and 2\xD7 coins"],pro:!1,pauseHold:1,make:i=>new Fa(i)},{id:"fruitFrenzy",title:"Fruit Frenzy",tagline:"Your hands are blades",moves:["Swipe fast through flying fruit","Slice several at once for combos","Golden banana starts a frenzy","Don't touch the bombs!"],pro:!1,pauseHold:2,make:i=>new Oa(i)},{id:"penaltySave",title:"Penalty Save",tagline:"Be the hero under the floodlights",moves:["Reach with your hands to save shots","Step sideways to cover the goal","Shots curl, dip and blast as you level up"],pro:!1,pauseHold:2,make:i=>new ka(i)},{id:"alpineRush",title:"Alpine Rush",tagline:"Beat the clock down the mountain",moves:["Lean / step to steer through gates (+2s)","Hit ramps, jump in the air to spin","Crouch into a tuck for speed"],pro:!0,pauseHold:1,make:i=>new za(i)},{id:"boxingBlitz",title:"Boxing Blitz",tagline:"75 seconds in the ring with a coach",moves:["Punch the glowing pads","Duck swings, slip hooks left / right","Chain hits for multipliers"],pro:!0,pauseHold:2,make:i=>new Ha(i)}];var hr=new URL("./",import.meta.url).href,Sn=_u(),Va=new URLSearchParams(location.search),Ke=i=>{let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild},Yn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),wu="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Ae={id:Xe("userId",null),plan:Xe("plan","free"),expiresAt:Xe("planExpiry",null),get isPro(){return this.plan==="free"?!1:!this.expiresAt||new Date(this.expiresAt)>new Date}};if(!/^MC-[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(Ae.id??"")){let i=()=>wu[Math.floor(Math.random()*wu.length)];Ae.id=`MC-${i()}${i()}${i()}${i()}-${i()}${i()}${i()}${i()}`,Wn("userId",Ae.id)}async function Eu(i){if(!Sn)try{let t=await fetch("/api/checkin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:Ae.id,appVersion:"web",launch:i,macOS:navigator.userAgent.slice(0,40)})});if(!t.ok)return;let e=await t.json();Iu(e.plan,e.expiresAt)}catch{}}function Iu(i,t){Ae.plan=i,Ae.expiresAt=t,Wn("plan",i),Wn("planExpiry",t),Bi()}var Ga=[];function Xa(i,t,e,n){if(!Xe("shareUsage",!0))return;let s={type:i,t:new Date().toISOString()};if(t&&(s.game=t),e!==void 0&&(s.score=Math.round(e)),n!==void 0&&(s.seconds=Math.round(n)),Sn){ws({type:"event",event:s});return}Ga.push(s),(i==="finish"||i==="quit")&&Lu()}async function Lu(){if(!Ga.length||Sn)return;let i=Ga.splice(0,50);try{await fetch("/api/events",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:Ae.id,events:i})})}catch{Ga.unshift(...i)}}setInterval(Lu,2e4);var _i=document.getElementById("app"),ne=new Pa,Kt=new La(hr),Ac=document.createElement("canvas");Ac.id="stage";_i.append(Ac);var yn=new da({canvas:Ac,antialias:!0,powerPreference:"high-performance"});yn.setPixelRatio(Math.min(window.devicePixelRatio,2));yn.shadowMap.enabled=!0;yn.shadowMap.type=oc;yn.toneMapping=lc;yn.toneMappingExposure=1;yn.outputColorSpace=Fe;var Ls=new Ua(_i);Ls.show(!1);var X={screen:"menu",phase:"waiting",selected:Math.max(0,Kn.findIndex(i=>i.id===Xe("lastGame","canyonRun"))),game:null,info:null,gameStarted:!1,startedAt:0,result:null,isBest:!1,overlay:null,countdownTimer:null,goodSince:null,missingSince:null,stepArmed:!0},tn=Ke(`<div id="menu">
  <header>
    <div class="brand">
      <img src="${hr}icons/icon-180.png" alt="">
      <span class="name">MoveCam</span><span class="sep"></span>
      <select id="cameraSelect" title="Camera"></select>
      <span id="planBadge" class="btn"></span>
      <button class="btn" id="musicBtn" title="Music"></button>
      <button class="btn" id="settingsBtn" title="Settings">\u2699\uFE0E</button>
      <button class="btn ${Sn||!document.fullscreenEnabled?"hidden":""}" id="fullBtn" title="Full screen">\u2922</button>
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
</div>`);_i.append(tn);var gi=Ke(`<div id="live" class="${Sn?"hidden":""}">
  <div class="frame"><div class="offline">Camera off</div><canvas></canvas><div class="rings"></div>
  <div class="status"><span class="msg">Can't see anyone</span></div></div></div>`);_i.append(gi);var cr=gi.querySelector("canvas"),ur=Ke('<button id="pauseBtn" class="hidden" aria-label="Pause">\u275A\u275A</button>');_i.append(ur);var Is=Ke('<div id="countdown" class="hidden"></div>'),Tc=Ke('<div id="holdRing" class="hidden"><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,.2)" stroke-width="6" fill="none"/><circle class="arc" cx="32" cy="32" r="28" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176" transform="rotate(-90 32 32)"/></svg><div>Keep your hands up to pause</div></div>'),Wa=Ke('<div id="toast" class="hidden"></div>');_i.append(Is,Tc,Wa);var Tu;function Uu(i){Wa.textContent=i,Wa.classList.remove("hidden"),clearTimeout(Tu),Tu=setTimeout(()=>Wa.classList.add("hidden"),3e3)}function Rc(i){return Xe("best."+i,0)}function Bi(){let i=tn.querySelector("#carousel");i.innerHTML="",Kn.forEach((n,s)=>{let r=n.pro&&!Ae.isPro,a=Rc(n.id),o=Ke(`<div class="card ${s===X.selected?"selected":""} ${r?"locked":""}">
      <div class="art" style="background-image:url('${hr}cards/${n.id}.jpg')">
        <div class="tags">${n.pro?'<span class="tag pro">PRO</span>':'<span class="tag dark">FREE</span>'}${r?'<span class="tag dark">\u{1F512}</span>':""}</div>
      </div>
      <div class="body">
        <div class="title">${Yn(n.title)}</div>
        <div class="tagline">${Yn(n.tagline)}</div>
        <ul>${n.moves.map(l=>`<li>${Yn(l)}</li>`).join("")}</ul>
        <div class="foot"><span class="best">${a>0?"Best "+a.toLocaleString():"Not played yet"}</span>
        <span class="play">${r?"\u{1F512} Pro coming soon":"\u270B Play"}</span></div>
      </div></div>`);o.addEventListener("click",()=>{Kt.unlock(),X.selected===s?Cc():(X.selected=s,Kt.play("select"),Bi())}),i.append(o)}),i.children[X.selected]?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});let e=tn.querySelector("#planBadge");e.textContent=Ae.isPro?Ae.plan==="trial"?"\u2605 Pro trial":"\u2605 Pro":"Free plan",e.style.background=Ae.isPro?"var(--pro)":"",e.style.color=Ae.isPro?"#000":"",tn.querySelector("#musicBtn").textContent=Kt.settings.music?"\u266B":"\u266B\u0338"}function Us(i){let t=Math.max(0,Math.min(Kn.length-1,X.selected+i));t!==X.selected&&(X.selected=t,Kt.play("select"),Bi())}tn.querySelector("#musicBtn").addEventListener("click",()=>{Kt.unlock(),Kt.set("music",!Kt.settings.music),Bi()});tn.querySelector("#settingsBtn").addEventListener("click",()=>Du());tn.querySelector("#fullBtn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()});function dr(i){Mn(),X.overlay=i,_i.append(i)}function Mn(){X.overlay?.remove(),X.overlay=null}function Ds(i,t,e,n,s){let r=Ke(`<button class="choice ${n}"><span class="sym">${i}</span><b>${t}</b><span>${e}</span></button>`);return r.addEventListener("click",s),r}function d_(){let i=Kn[X.selected],t=Ke(`<div class="scrim"><div class="panel">
    <span class="tag pro">PRO</span>
    <h2>${Yn(i.title)} is part of MoveCam Pro</h2>
    <p>Pro isn't on sale yet. Want early access? Send your MoveCam ID to a moderator and they can unlock it for you.</p>
    <div class="idbox"><span>${Ae.id}</span><button class="btn" id="copyId">Copy</button></div>
    <button class="btn accent big" id="okBtn">OK</button>
    <p style="font-size:12px;color:var(--tertiary)">Raise a hand or press Space to close</p></div></div>`);t.querySelector("#copyId").addEventListener("click",()=>navigator.clipboard?.writeText(Ae.id)),t.querySelector("#okBtn").addEventListener("click",Mn),t.addEventListener("click",e=>{e.target===t&&Mn()}),t.dataset.kind="pro",dr(t)}function Du(){let i=s=>`<button class="switch ${s?"on":""}"></button>`,t=Ke(`<div class="scrim"><div class="panel settings">
    <h2>Settings</h2>
    <div class="row"><label>Music</label>${i(Kt.settings.music)}</div>
    <div class="row"><label>Music volume</label><input type="range" min="0" max="1" step="0.05" value="${Kt.settings.volume}"></div>
    <div class="row"><label>Sound effects</label>${i(Kt.settings.sound)}</div>
    <div class="row"><label>Show tracking skeleton</label>${i(Xe("skeleton",!0))}</div>
    <div class="row ${Sn?"hidden":""}"><label>Share anonymous play stats<small>Game names, scores and play time. Never video.</small></label>${i(Xe("shareUsage",!0))}</div>
    <div class="row"><label>Your MoveCam ID<small>${Ae.isPro?Ae.plan==="trial"?"Pro trial":"Pro":"Free plan"}</small></label><span class="idbox" style="font-size:15px">${Ae.id}</span></div>
    <button class="btn accent big" style="align-self:center;margin-top:8px" id="doneBtn">Done</button></div></div>`),e=t.querySelectorAll(".switch"),n=["music","sound","skeleton","shareUsage"];e.forEach((s,r)=>s.addEventListener("click",()=>{let a=!s.classList.contains("on");s.classList.toggle("on",a),n[r]==="music"||n[r]==="sound"?Kt.set(n[r],a):Wn(n[r],a),Bi()})),t.querySelector("input[type=range]").addEventListener("input",s=>Kt.set("volume",parseFloat(s.target.value))),t.querySelector("#doneBtn").addEventListener("click",Mn),t.addEventListener("click",s=>{s.target===t&&Mn()}),t.dataset.kind="settings",dr(t)}function Nu(){let i=Ke(`<div class="scrim"><div class="panel">
    <div class="eyebrow">${Yn(X.info.title)}</div>
    <h2 class="headline">Get in position</h2>
    <div class="pill"><span class="msg">Can't see anyone</span></div>
    <p>Stand back so the camera sees you from your head to below your hips. The frame around your camera view turns green when you're in the right spot.</p>
    <div class="choices"></div></div></div>`);i.querySelector(".choices").append(Ds("\u270B","Start now","Raise a hand \xB7 Space","good",()=>Ka()),Ds("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>qa())),i.dataset.kind="waiting",dr(i)}function f_(){let i=Ke('<div class="scrim"><div class="panel"><h2>Paused</h2><div class="choices"></div></div></div>');i.querySelector(".choices").append(Ds("\u270B","Resume","Raise a hand \xB7 Space","good",()=>Bu()),Ds("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>qa())),i.dataset.kind="paused",dr(i)}function p_(){let{result:i,isBest:t}=X,e=Ke(`<div class="scrim"><div class="panel">
    ${t?'<span class="tag pro">NEW BEST</span>':'<div class="eyebrow">Game over</div>'}
    <div class="score">${i.score.toLocaleString()}</div>
    <p>${Yn(i.detail)}</p>
    ${t?"":`<p style="color:var(--tertiary)">Best ${Rc(X.info.id).toLocaleString()}</p>`}
    <div class="choices"></div></div></div>`);e.querySelector(".choices").append(Ds("\u270B","Play again","Raise a hand \xB7 Space","good",()=>ku()),Ds("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>qa())),e.dataset.kind="over",dr(e)}var Fu={hub:ne,audio:Kt,hud:Ls,renderer:yn,aspect:()=>window.innerWidth/Math.max(window.innerHeight,1),onFinished:i=>m_(i)};function Cc(){let i=Kn[X.selected];if(i.pro&&!Ae.isPro){Xa("locked",i.id),Kt.play("pause"),d_();return}Wn("lastGame",i.id),Kt.play("confirm"),Pc(i)}function Pc(i){clearTimeout(X.countdownTimer),Ou(),Ls.reset(),X.info=i,X.game=i.make(Fu),X.gameStarted=!1,X.goodSince=null,X.missingSince=null,X.screen="game",X.phase="waiting",ne.handsUpHold=i.pauseHold,ne.resetGestures(),tn.classList.add("hidden"),Ls.show(!0),ur.classList.remove("hidden"),Kt.playMusic(i.id),Nu()}function Ou(){X.game&&(X.game.dispose(),X.game=null)}function Ka(){Mn(),clearTimeout(X.countdownTimer);let i=3;X.phase="countdown";let t=()=>{if(X.phase==="countdown"){if(i===0){Is.classList.add("hidden"),Kt.play("go"),ne.calibrate(),X.phase="playing",X.missingSince=null,ne.resetGestures(),X.gameStarted||(X.gameStarted=!0,X.startedAt=performance.now(),Xa("start",X.info.id),X.game.start());return}Is.innerHTML=`<span>${i}</span>`,Is.classList.remove("hidden"),Kt.play("beep"),i-=1,X.countdownTimer=setTimeout(t,800)}};t()}function Ic(i){X.screen!=="game"||!(X.phase==="playing"||X.phase==="countdown")||(clearTimeout(X.countdownTimer),Is.classList.add("hidden"),X.phase=X.gameStarted?"paused":"waiting",ne.resetGestures(),Kt.play("pause"),Kt.duck(!0),i&&Uu(i),X.phase==="paused"?f_():Nu())}function Bu(){X.phase==="paused"&&(ne.resetGestures(),Kt.duck(!1),Ka())}function qa(){clearTimeout(X.countdownTimer),X.gameStarted&&X.phase!=="over"&&X.info&&Xa("quit",X.info.id,X.game?.score??0,(performance.now()-X.startedAt)/1e3),Mn(),Is.classList.add("hidden"),Ou(),X.screen="menu",X.phase="waiting",Ls.show(!1),ur.classList.add("hidden"),tn.classList.remove("hidden"),ne.handsUpHold=1,ne.resetGestures(),ne.calibrate(),Kt.play("pause"),Kt.playMusic("menu"),Bi()}function ku(){X.info&&(Kt.play("confirm"),Pc(X.info))}function m_(i){if(X.screen!=="game"||!X.info)return;let t=i.score>Rc(X.info.id);t&&Wn("best."+X.info.id,i.score),Xa("finish",X.info.id,i.score,(performance.now()-X.startedAt)/1e3),X.result=i,X.isBest=t,X.phase="over",ne.resetGestures(),Kt.duck(!0),t&&setTimeout(()=>Kt.play("combo"),1200),p_()}ne.onEvent(i=>{if(X.overlay?.dataset.kind!=="settings"){if(X.screen==="menu"){if(X.overlay?.dataset.kind==="pro"){(i==="confirm"||i==="back")&&Mn();return}i==="confirm"?Cc():i==="swipeLeft"?Us(-1):i==="swipeRight"&&Us(1);return}i==="confirm"?X.phase==="waiting"?Ka():X.phase==="paused"?Bu():X.phase==="over"&&ku():i==="back"&&(X.phase==="playing"||X.phase==="countdown"?Ic():qa())}});ur.addEventListener("click",()=>Ic());window.addEventListener("keydown",i=>{if(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)return;Kt.unlock();let t=i.code==="Space"||i.code==="Enter",e=i.code==="Escape";if(X.overlay?.dataset.kind==="settings"){e&&Mn();return}if(X.screen==="menu"){if(X.overlay?.dataset.kind==="pro"){(t||e)&&Mn(),i.preventDefault();return}if(i.code==="ArrowLeft")Us(-1);else if(i.code==="ArrowRight")Us(1);else if(t)Cc();else return;i.preventDefault();return}if(e){ne.emit("back"),i.preventDefault();return}if(t&&X.phase!=="playing"){ne.emit("confirm"),i.preventDefault();return}if(X.phase==="playing"){if(i.code==="ArrowLeft")ne.keyboardStep(-1);else if(i.code==="ArrowRight")ne.keyboardStep(1);else if(i.code==="ArrowUp"||i.code==="Space")ne.keyboardJump();else if(i.code==="ArrowDown")ne.keyboardCrouch();else return;i.preventDefault()}});var cn=cr.getContext("2d"),Au=0;ne.onSnapshot(i=>{let t=i.status.good;if(gi.classList.toggle("good",t),gi.querySelector(".msg").textContent=i.status.message,X.overlay?.dataset.kind==="waiting"){let o=X.overlay.querySelector(".pill");o.classList.toggle("good",t),o.querySelector(".msg").textContent=i.status.message,X.overlay.querySelector(".headline").textContent=t?"Hold still":"Get in position"}let e=performance.now();if(Sn||e-Au<30)return;Au=e;let n=cr.width=cr.clientWidth*devicePixelRatio,s=cr.height=cr.clientHeight*devicePixelRatio;cn.clearRect(0,0,n,s);let r=i.pose;if(r&&Xe("skeleton",!0)){let o=l=>[l.x*n,(1-l.y)*s];cn.strokeStyle="rgba(255,255,255,.7)",cn.lineWidth=2.5*devicePixelRatio,cn.lineCap="round",cn.beginPath();for(let[l,c]of mu){let h=r.joints[l],u=r.joints[c];!h||!u||(cn.moveTo(...o(h)),cn.lineTo(...o(u)))}cn.stroke(),cn.fillStyle=t?"#30c75a":"#ed4038";for(let l of Object.values(r.joints)){let[c,h]=o(l);cn.beginPath(),cn.arc(c,h,4*devicePixelRatio,0,Math.PI*2),cn.fill()}}let a=gi.querySelector(".rings");a.innerHTML="";for(let[o,l]of[[i.confirmProgress,"\u270B"],[i.handsUpProgress,"\u{1F64C}"]])o<.05||a.insertAdjacentHTML("beforeend",`<svg class="ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="rgba(0,0,0,.7)"/><circle cx="22" cy="22" r="18" stroke="#30c75a" stroke-width="4" fill="none" stroke-dasharray="113" stroke-dashoffset="${113*(1-o)}" transform="rotate(-90 22 22)" stroke-linecap="round"/><text x="22" y="28" font-size="16" text-anchor="middle">${l}</text></svg>`)});var Ru="";setInterval(()=>{let i=X.screen+":"+X.phase;Sn&&i!==Ru&&(Ru=i,ws({type:"state",screen:X.screen,phase:X.phase}));let t=ne.latest;if(X.screen==="menu"){if(X.overlay||!t.status.good){X.stepArmed=!0;return}X.stepArmed&&t.lateral<-.7?(X.stepArmed=!1,Us(-1)):X.stepArmed&&t.lateral>.7?(X.stepArmed=!1,Us(1)):Math.abs(t.lateral)<.35&&(X.stepArmed=!0);return}X.phase==="waiting"&&X.overlay?.dataset.kind==="waiting"?t.status.good?(X.goodSince??=performance.now(),performance.now()-X.goodSince>1200&&Ka()):X.goodSince=null:X.phase==="playing"&&(t.status===We.noPerson&&!t.keyboardActive&&g_()?(X.missingSince??=performance.now(),performance.now()-X.missingSince>3e3&&Ic("Paused \u2014 we lost sight of you")):X.missingSince=null);let e=X.phase==="playing"?t.handsUpProgress:0;Tc.classList.toggle("hidden",e<.15),Tc.querySelector(".arc").setAttribute("stroke-dashoffset",String(176*(1-e)))},100);function Lc(){yn.setSize(window.innerWidth,window.innerHeight,!1),X.game?.resize(Fu.aspect())}window.addEventListener("resize",Lc);Lc();var Cu=performance.now(),wc=0,Ec=performance.now(),Pu=!1;yn.setAnimationLoop(()=>{let i=performance.now(),t=Math.min((i-Cu)/1e3,1/20);Cu=i;let e=X.game;X.screen==="game"&&e&&(X.phase==="playing"&&!e.finished?(e.elapsed+=t,e.update(t,ne.latest)):e.idle(t),yn.render(e.scene,e.camera),wc++,!Pu&&i-Ec>4e3&&(wc/((i-Ec)/1e3)<42&&(Pu=!0,yn.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),Lc()),wc=0,Ec=i))});var qn=null;function g_(){return Sn||qn?.state==="running"}async function zu(i){if(!Sn&&(qn??=new Ia(ne,hr),qn.onState=(t,e)=>{let n=gi.querySelector(".offline");n.textContent=t==="running"?"":t==="denied"?"Camera blocked":t==="error"?"Camera error":"Starting camera\u2026",n.classList.toggle("hidden",t==="running"),t==="denied"&&Uu("Allow camera access in your browser settings to play with your body."),t==="error"&&e&&console.warn(e)},await qn.start(i),qn.state==="running")){let t=gi.querySelector(".frame");t.contains(qn.video)||t.prepend(qn.video);let e=tn.querySelector("#cameraSelect"),n=await qn.listDevices();e.innerHTML=n.map((r,a)=>`<option value="${r.deviceId}">${Yn(r.label||"Camera "+(a+1))}</option>`).join("");let s=qn.stream?.getVideoTracks()[0]?.getSettings().deviceId;s&&(e.value=s),e.onchange=()=>{Wn("camera",e.value),zu(e.value)}}}function __(){let i=Ke(`<div id="start">
    <img src="${hr}icons/icon-180.png" alt="">
    <h1>MoveCam</h1>
    <p>Your body is the controller. MoveCam uses your camera to see you move \u2014 video never leaves your device.</p>
    <button class="btn accent big" id="go">Start</button>
    <p style="font-size:13px;color:var(--tertiary)">Prop your device up, step back about 2 m (6 ft) and make sure the room is bright.</p>
  </div>`);i.querySelector("#go").addEventListener("click",()=>{Kt.unlock(),Kt.playMusic("menu"),i.remove(),zu(Xe("camera",void 0))}),_i.append(i)}gu(ne);window.MoveCamNative.setAccount=({userId:i,plan:t,expiresAt:e})=>{i&&(Ae.id=i),Iu(t??"free",e??null)};window.MoveCamNative.setCameras=(i,t)=>{let e=tn.querySelector("#cameraSelect");e.innerHTML=i.map(n=>`<option value="${Yn(n.id)}">${Yn(n.name)}</option>`).join(""),e.value=t,e.onchange=()=>ws({type:"selectCamera",id:e.value})};window.MoveCamNative.setUpdate=i=>{let t=tn.querySelector("#updateBtn");t.classList.toggle("hidden",!i),i&&(t.textContent=`\u2B07\uFE0E Update to ${i.version}`)};tn.querySelector("#updateBtn").addEventListener("click",()=>ws({type:"installUpdate"}));window.MoveCamNative.command=i=>{i==="back"&&ne.emit("back"),i==="confirm"&&ne.emit("confirm"),i==="settings"&&Du()};Bi();if(Va.has("preview")){ne.simulateHands=!0;let i=Va.get("preview"),t=Kn.findIndex(e=>e.id===i);t>=0&&(X.selected=t,Pc(Kn[t]),Mn(),X.phase="playing",X.gameStarted=!0,X.game.start(),ne.keyboardStep(1),setTimeout(()=>ne.keyboardJump(),1500),setTimeout(()=>X.game?.showcase?.(),Number(Va.get("showcase")??3500)),Va.has("clean")&&(gi.classList.add("hidden"),Ls.show(!1),ur.classList.add("hidden")))}else Sn?(Kt.unlock(),Kt.playMusic("menu"),ws({type:"ready"})):(Eu(!0),setInterval(()=>Eu(!1),20*60*1e3),__());window.__movecam={state:X,hub:ne,audio:Kt,GAMES:Kn};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
