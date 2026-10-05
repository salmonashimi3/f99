// Aircraft roster in unlock order. Model space after normalization: nose +Z, up +Y, left wing +X, meters.
// gun/eye/noz: [x, y, z] with z given as a fraction of half-length (1 = nose tip, -1 = tail).
export const PLANES=[
 {id:'f5',  name:'F-5E Tiger II',     nation:'USA', file:'models/f5.glb',  yaw:58.5, len:14.45, hp:80,  mil:11, ab:9,  turn:1.0,  gun:{name:'M39 20mm ×2',rate:28,dmg:8,ammo:560,spd:1000,pos:[[0.16,'top',0.74],[-0.16,'top',0.74]]}, msl:[['aim9',2]], flr:24, eye:[0,'eye',0.55], noz:[[0.45,'noz',-0.86],[-0.45,'noz',-0.86]], nozR:.32, price:0},
 {id:'a10', name:'A-10C Thunderbolt II',nation:'USA',file:'models/a10.glb',yaw:0,  len:16.26, hp:190, mil:8,  ab:0,  turn:0.95, gun:{name:'GAU-8 30mm',rate:65,dmg:13,ammo:1150,spd:1010,pos:[[-0.1,'bot',0.95]]}, msl:[['aim9',2]], flr:60, eye:[0,'eye',0.62], noz:[], nozR:.5, price:900},
 {id:'f117',name:'F-117A Nighthawk',  nation:'USA', file:'models/f117.glb',yaw:180,len:20.1,  hp:95,  mil:10, ab:0,  turn:0.75, gun:null, msl:[['aim9',4],['aim120',2]], flr:30, eye:[0,'eye',0.5], noz:[], nozR:.4, stealth:.45, price:1400},
 {id:'f4',  name:'F-4E Phantom II',   nation:'USA', file:'models/f4.glb',  yaw:-90,len:19.2,  hp:125, mil:13, ab:14, turn:0.85, gun:{name:'M61 20mm',rate:100,dmg:8,ammo:640,spd:1030,pos:[[0,'bot',0.88]]}, msl:[['aim9',4],['aim7',4]], flr:30, eye:[0,'eye',0.5], noz:[[0.55,'noz',-0.62],[-0.55,'noz',-0.62]], nozR:.42, price:2000},
 {id:'f15', name:'F-15C Eagle',       nation:'USA', file:'models/f15.glb', yaw:0,  len:19.43, hp:135, mil:15, ab:17, turn:1.05, gun:{name:'M61A1 20mm',rate:100,dmg:8,ammo:940,spd:1030,pos:[[-1.55,'top',0.12]]}, msl:[['aim9',4],['aim120',4]], flr:36, eye:[0,'eye',0.55], noz:[[0.65,'noz',-0.88],[-0.65,'noz',-0.88]], nozR:.48, price:2700},
 {id:'f18', name:'F/A-18F Super Hornet',nation:'USA',file:'models/f18.glb',yaw:-90,len:18.31, hp:130, mil:14, ab:14, turn:1.12, gun:{name:'M61A2 20mm',rate:100,dmg:8,ammo:578,spd:1030,pos:[[0,'top',0.86]]}, msl:[['aim9',2],['aim120',6]], flr:40, eye:[0,'eye',0.52], noz:[[0.5,'noz',-0.88],[-0.5,'noz',-0.88]], nozR:.45, price:3400},
 {id:'su27',name:'Su-27 Flanker-B',   nation:'UKR', file:'models/su27.glb',yaw:180,len:21.9,  hp:135, mil:15, ab:17, turn:1.1,  gun:{name:'GSh-30-1 30mm',rate:25,dmg:17,ammo:150,spd:860,pos:[[-1.35,'top',0.3]]}, msl:[['r73',4],['r27',6]], flr:48, eye:[0,'eye',0.62], noz:[[1.0,'noz',-0.84],[-1.0,'noz',-0.84]], nozR:.5, price:4200},
 {id:'su30',name:'Su-30 Flanker-C',   nation:'RUS', file:'models/su30.glb',yaw:-90,len:21.9,  hp:145, mil:15, ab:17, turn:1.15, gun:{name:'GSh-30-1 30mm',rate:25,dmg:17,ammo:150,spd:860,pos:[[-1.35,'top',0.3]]}, msl:[['r73',4],['r77',6]], flr:48, eye:[0,'eye',0.62], noz:[[1.0,'noz',-0.84],[-1.0,'noz',-0.84]], nozR:.5, price:5000},
 {id:'su34',name:'Su-34 Fullback',    nation:'RUS', file:'models/su34.glb',yaw:-90,len:23.34, hp:185, mil:14, ab:15, turn:0.85, gun:{name:'GSh-30-1 30mm',rate:25,dmg:17,ammo:180,spd:860,pos:[[-1.4,'top',0.3]]}, msl:[['r73',4],['r77',4]], flr:64, eye:[0.4,'eye',0.66], noz:[[1.0,'noz',-0.84],[-1.0,'noz',-0.84]], nozR:.5, price:5800},
 {id:'su35',name:'Su-35 Flanker-E',   nation:'RUS', file:'models/su35.glb',yaw:-90,len:21.9,  hp:145, mil:16, ab:18, turn:1.3,  gun:{name:'GSh-30-1 30mm',rate:25,dmg:17,ammo:150,spd:860,pos:[[-1.35,'top',0.3]]}, msl:[['r73',4],['r77',8]], flr:48, eye:[0,'eye',0.62], noz:[[1.0,'noz',-0.84],[-1.0,'noz',-0.84]], nozR:.5, price:6800},
 {id:'su57',name:'Su-57 Felon',       nation:'RUS', file:'models/su57.glb',yaw:-90,len:20.1,  hp:145, mil:17, ab:18, turn:1.3,  gun:{name:'GSh-30-1 30mm',rate:25,dmg:17,ammo:150,spd:860,pos:[[-1.3,'top',0.4]]}, msl:[['r73',4],['r77',6]], flr:48, eye:[0,'eye',0.55], noz:[[1.1,'noz',-0.85],[-1.1,'noz',-0.85]], nozR:.5, stealth:.7, price:8000},
 {id:'f22', name:'F-22A Raptor',      nation:'USA', file:'models/f22.glb', yaw:180,len:18.92, hp:145, mil:18, ab:17, turn:1.3,  gun:{name:'M61A2 20mm',rate:100,dmg:8,ammo:480,spd:1030,pos:[[-1.45,'top',0.32]]}, msl:[['aim9',2],['aim120',6]], flr:40, eye:[0,'eye',0.55], noz:[[0.6,'noz',-0.82],[-0.6,'noz',-0.82]], nozR:.45, stealth:.6, price:9500},
 {id:'f35', name:'F-35A Lightning II',nation:'USA', file:'models/f35.glb', yaw:-90,len:15.7,  hp:135, mil:15, ab:15, turn:1.05, gun:{name:'GAU-22 25mm',rate:55,dmg:12,ammo:182,spd:1020,pos:[[1.05,'top',0.2]]}, msl:[['aim9',2],['aim120',4]], flr:36, eye:[0,'eye',0.5], noz:[[0,'noz',-0.88]], nozR:.6, stealth:.6, price:11000},
 {id:'f14', name:'F-14D Super Tomcat',nation:'USA', file:'f14', yaw:0,  len:0,     hp:165, mil:16, ab:18, turn:1.15, gun:{name:'M61A1 20mm',rate:100,dmg:8,ammo:675,spd:1030,pos:[[0.6,-0.19,9.0]]}, msl:[['aim9',4],['aim54',6]], flr:36, eye:[0,1.29,7.12], noz:[[1.33,-0.06,-7.35],[-1.33,-0.06,-7.35]], nozR:.5, abs:true, sweep:true, price:14000},
];
export const MSL={
 aim9:  {name:'AIM-9M',  ir:true, spd:820, turn:1.05,burn:2.6,life:14,range:4500, cone:.42,lock:1.0,dmg:120},
 r73:   {name:'R-73',    ir:true, spd:800, turn:1.2, burn:2.4,life:13,range:4200, cone:.6, lock:.9, dmg:115},
 aim7:  {name:'AIM-7F',  ir:false,spd:900, turn:.6,  burn:3.5,life:20,range:8000, cone:.35,lock:1.8,dmg:140},
 r27:   {name:'R-27R',   ir:false,spd:900, turn:.65, burn:3.5,life:20,range:8000, cone:.35,lock:1.7,dmg:140},
 aim120:{name:'AIM-120C',ir:false,spd:1050,turn:.75, burn:4,  life:26,range:11000,cone:.45,lock:1.5,dmg:140},
 r77:   {name:'R-77',    ir:false,spd:1020,turn:.75, burn:4,  life:26,range:10500,cone:.45,lock:1.5,dmg:140},
 aim54: {name:'AIM-54C', ir:false,spd:1150,turn:.45, burn:6,  life:40,range:16000,cone:.55,lock:1.8,dmg:160},
};
export const PAINTS=[
 {id:'std',  name:'기본 도장', c:'#ffffff'},
 {id:'navy', name:'해군 회색', c:'#a9b4bf'},
 {id:'desert',name:'사막',     c:'#e2cfa3'},
 {id:'jungle',name:'정글',     c:'#9fb08a'},
 {id:'red',  name:'어그레서 레드',c:'#d79a8c'},
 {id:'night',name:'야간 흑색', c:'#5c636c'},
 {id:'blue', name:'블루 엔젤', c:'#8fa8d8'},
];

// Normalize a loaded glTF scene to the roster's model space and resolve auto points by raycasting the hull.
export function prepModel(THREE,scene,P){
  const w=new THREE.Group();w.add(scene);
  if(P.len){scene.rotation.y=P.yaw*Math.PI/180;w.updateMatrixWorld(true);let b=new THREE.Box3().setFromObject(w,true);
    scene.scale.multiplyScalar(P.len/(b.max.z-b.min.z));w.updateMatrixWorld(true);b=new THREE.Box3().setFromObject(w,true);
    scene.position.sub(b.getCenter(new THREE.Vector3()));}
  w.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(w,true);const h=P.len?P.len/2:1;
  const meshes=[];scene.traverse(o=>{if(o.isMesh&&!(o.material&&o.material.transparent))meshes.push(o)});
  const rc=new THREE.Raycaster();
  const hit=(x,z,top)=>{rc.set(new THREE.Vector3(x,top?50:-50,z),new THREE.Vector3(0,top?-1:1,0));const r=rc.intersectObjects(meshes,false);return r.length?r[0].point.y:null};
  const res=(p,kind)=>{if(typeof p[1]!=='string')return new THREE.Vector3(p[0],p[1],P.len?p[2]*h:p[2]);
    const z=p[2]*h;let y;
    if(p[1]==='top'){const t=hit(p[0],z,true);y=t==null?0:t-0.12}
    else if(p[1]==='bot'){const t=hit(p[0],z,false);y=t==null?-.5:t+0.12}
    else if(p[1]==='eye'){let m=-1e9;for(let dz=0;dz<=4;dz+=.5){const t=hit(p[0],z+dz,true);if(t!=null)m=Math.max(m,t)}y=m<-1e8?1:m+0.3}
    else {const t=hit(p[0],z,true);y=t==null?0:t-P.nozR*1.05}
    return new THREE.Vector3(p[0],y,z)};
  return{root:w,box,gun:P.gun?P.gun.pos.map(res):[],eye:res(P.eye),noz:P.noz.map(res)};
}
