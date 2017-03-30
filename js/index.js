var camera, cLight, scene, renderer;
var spd = 15;

class Level {

	_initBoxArray() {
  	let blockSize = this.blockSize,
        drawDistance = this.drawDistance,
        level = this.level,
        _boxes = this._boxes;
    let srcMaterials = [0,1].map(v => new THREE.MeshLambertMaterial({
    	color: (v === 0) ? 0xFF8020 : 0x8020FF, wireframe: false
    }));
  	let box = new THREE.BoxGeometry(blockSize, 100*blockSize, blockSize, 1, 1, 1);
    for (let z = 0; z < drawDistance; z++) {
    	_boxes.push(level[0].map((_, idx) => new THREE.Mesh(box, srcMaterials[(z + idx) % 2])));
    }
  }
  
  constructor(level, {blockSize = 200, stepSize = 25, drawDistance = 20} = {}) {
  	this.blockSize = blockSize;
    this.stepSize = stepSize;
    this.drawDistance = drawDistance;
  	this.level = level.map(r => r.split(" ").map(c => Number.isNaN(Number(c)) ? c : Number(c))); 
    this.curRow = 0;
    this.maxVisibleRow = drawDistance - 1;
    this._boxes = [];
    this._initBoxArray();
  }
  
  get description() {
    return this.level.map(r => r.join(" ")).join(String.fromCharCode(10));  
  }
  
  makeScene() {
    let scene = new THREE.Scene();
    
    this.updateScene(0, {force: true});
    this._boxes.forEach(z => z.forEach(mesh => scene.add(mesh)));
    
    let aLight = new THREE.AmbientLight(0xFFFFFF, 0.25);
    //scene.add(aLight); 
    
    let hLight = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 1);
    scene.add(hLight);

    let dLight = new THREE.DirectionalLight(0xFFFFFF, 0.25);
    dLight.position.set(0, 10, 3);
    scene.add(dLight);

    return scene;
 
  }
  
  updateScene(cameraZ, {force = false} = {}) {
		let stepSize = this.stepSize, blockSize = this.blockSize, level = this.level,
        drawDistance = this.drawDistance, _boxes = this._boxes;

    let curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0);
    let maxVisibleRow = curRow + drawDistance - 1;
    let delta = curRow - this.curRow;
    
    if (force || delta > 0) {
      let offsetY = 50 * stepSize, halfHeight = 50 * blockSize;
      
      for (let i = 0; i < delta; i++) {
      	let row = _boxes.shift();
        _boxes.push(row);
      }
      
      for (let z = force ? curRow : (maxVisibleRow - delta); z <= Math.min(level.length - 1, maxVisibleRow); z++) {
        let r = level[z];
        let offsetX = (r.length / 2) * blockSize - (blockSize / 2);
        for (let x = r.length-1; x > -1; x--) {
          let c = r[x];
          let mesh = _boxes[z - curRow][x];
          if (c !== "..") {
            if (c === 0) {
              //c = Math.floor(Math.abs((Math.sin(z/6.28) + Math.cos(x/6.28)) * 25));
            }
            let h = c * stepSize;
            mesh.visible = true;
            mesh.position.set(x * blockSize - offsetX, -(halfHeight + offsetY) + h, -z * blockSize);
          } else {
            mesh.visible = false;
          }
        }        
      }
    }
    
    this.curRow = curRow;
    this.maxVisibleRow = maxVisibleRow;
  }
  
  heightAtCoordinates(z, x) {
    let offsetY = 50 * this.stepSize, halfHeight = 50 * this.blockSize;
  	let r = this.level[z];
    if (r) {
      let c = r[x];
      if (Number.isNaN(Number(c))) {
        return undefined;
      }
			if (c === 0) {
                    //c = Math.floor(Math.abs((Math.sin(z/6.28) + Math.cos(x/6.28)) * 25));
      }
      let h =  -offsetY + (Number(c) * this.stepSize);
      return h;
    } else {
    	return undefined;
    }
  }
  
  heightAtPosition(position) {
  	let blockSize = this.blockSize;
    let offsetX = (this.level[0].length / 2) * blockSize - (blockSize / 2);

  	return this.heightAtCoordinates(Math.floor(-(position.z / blockSize) + 0.5), Math.floor((position.x + offsetX) / blockSize));
  }
}

var level = new Level([
  ".. 00 00 00 00 00 00 00 50 00 00 00 00 00 00 00 ..",
  ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
  ".. 51 51 51 51 51 51 51 51 51 51 51 51 51 51 51 ..",
  ".. 00 00 00 00 60 60 52 52 52 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 60 60 53 53 53 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 60 60 54 54 54 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 60 60 55 55 55 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 56 56 56 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 57 57 57 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 58 00 58 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 59 00 59 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 60 00 60 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 01 00 00 70 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 02 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 03 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 05 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 06 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 07 00 00 00 30 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 08 00 00 00 40 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 09 00 00 00 50 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 10 00 00 00 70 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 15 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 20 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 25 00 00 00 99 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 30 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 35 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 35 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 45 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 45 00 00 00 00 00 00 00 ..",
  ".. 00 00 00 00 00 00 00 45 00 00 00 00 00 00 00 ..",
])


document.getElementById("l").textContent = level.description;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0,200, 2000);

		scene = level.makeScene();
				scene.fog = new THREE.FogExp2( 0x000000, 0.00033 );

    cLight = new THREE.PointLight(0xFFFFFF, 1, 5000, 2);
    cLight.position.set(camera.position.x, camera.position.y, camera.position.z);
    //scene.add(cLight);

    renderer = new THREE.WebGLRenderer({
        antialias: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(devicePixelRatio);

    document.body.appendChild(renderer.domElement);



}

var ot = 0, f = 0, tf = 0, td = 0, rf=0;

function animate(t) {
    var d = 0;
    f++; tf++;
    requestAnimationFrame(animate);

    if (ot != 0 && t) {
       d = t - ot;
       td += d;
       if (td > 1000) {
       		 rf = Math.floor(10000 / (td/f))/10;
           td-=1000; f = 0;
		document.getElementById("d").textContent = 
      [Math.floor(t), Math.floor(d), Math.floor(camera.position.z), f, tf, rf, Math.floor(10000/ (td/f))/10].join(", ");

       }
    }
    ot = t;

//    camera.position.x += 5;
		let camHeight = level.heightAtPosition(camera.position);
    if (camHeight) {
			camHeight += 200;
      if (camHeight !== camera.position.y) {
      	camera.position.y += (camHeight - camera.position.y)/(100/spd);
      }
    }
    camera.position.z -= spd * (d/16.67);
    if (camera.position.z < -(level.level.length * level.blockSize)) {
        camera.position.z = 2000;
        level.updateScene(camera.position.z, {force: true});
    } else {
    	level.updateScene(camera.position.z);
    }
   //cLight.position.set(camera.position.x, camera.position.y + 500, camera.position.z + 500);


    renderer.render(scene, camera);

}