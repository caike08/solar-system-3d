var background, sun, mercury, venus, earth, mars, jupiter, saturn, saturnrings, uranus, neptune, pluto;
var scene = new THREE.Scene();
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.z = 80;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function init() {
  // add planets
  addLight();
  //addSun();
  addMercury();
  addVenus();
  addEarth();
  addMars();
  addJupiter();
  // TODO: ADD saturn rings
  /*addSaturn();
  addSaturnRings();
  addUranus();
  addNeptune();
  addPluto();*/

  render();
}

function addLight() {
  //add light
  var light = new THREE.DirectionalLight( 0xffffff, .8);
  light.position.set(-5, 3, 5).normalize();

  scene.add(light);
}

function addSun() {

  var sunGeometry = new THREE.SphereGeometry(15, 50, 50);
  var sunMaterial  = new THREE.MeshPhongMaterial({});


  var sunIMG = new THREE.ImageLoader();

  sunIMG.load( "../img/sun.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    sunMaterial.map = texture;
    sunMaterial.needsUpdate = true;
  });


  sun = new THREE.Mesh(sunGeometry, sunMaterial);

  scene.add(sun);
}

function addMercury() {
  var mercuryGeometry = new THREE.SphereGeometry(2, 32, 32);
  var mercuryMaterial  = new THREE.MeshPhongMaterial({});


  var mercuryIMG = new THREE.ImageLoader();

  mercuryIMG.load( "../img/mercury.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    mercuryMaterial.map = texture;
    mercuryMaterial.needsUpdate = true;
  });

  mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

  scene.add(mercury);
}

function addVenus() {
  var venusGeometry = new THREE.SphereGeometry(3, 32, 32);
  var venusMaterial  = new THREE.MeshPhongMaterial({});


  var venusIMG = new THREE.ImageLoader();

  venusIMG.load( "../img/venus.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    venusMaterial.map = texture;
    venusMaterial.needsUpdate = true;
  });

  venus = new THREE.Mesh(venusGeometry, venusMaterial);

  scene.add(venus);
}

function addEarth() {
  var earthGeometry = new THREE.SphereGeometry(4, 32, 32);
  var earthMaterial  = new THREE.MeshPhongMaterial({});


  var earthIMG = new THREE.ImageLoader();

  earthIMG.load( "../img/earth.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    earthMaterial.map = texture;
    earthMaterial.needsUpdate = true;
  });

  earth = new THREE.Mesh(earthGeometry, earthMaterial);

  scene.add(earth);
}

function addMars() {
  var marsGeometry = new THREE.SphereGeometry(5, 32, 32);
  var marsMaterial  = new THREE.MeshPhongMaterial({});


  var marsIMG = new THREE.ImageLoader();

  marsIMG.load( "../img/mars.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    marsMaterial.map = texture;
    marsMaterial.needsUpdate = true;
  });

  mars = new THREE.Mesh(marsGeometry, marsMaterial);

  scene.add(mars);
}

function addJupiter() {
  var jupiterGeometry = new THREE.SphereGeometry(10, 32, 32);
  var jupiterMaterial  = new THREE.MeshPhongMaterial({});


  var jupiterIMG = new THREE.ImageLoader();

  jupiterIMG.load( "../img/jupiter.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    jupiterMaterial.map = texture;
    jupiterMaterial.needsUpdate = true;
  });

  jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

  scene.add(jupiter);
}

function addSaturn() {
  var saturnGeometry = new THREE.SphereGeometry(5, 32, 32);
  var saturnMaterial  = new THREE.MeshPhongMaterial({});


  var saturnIMG = new THREE.ImageLoader();

  saturnIMG.load( "../img/saturn.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    saturnMaterial.map = texture;
    saturnMaterial.needsUpdate = true;
  });


  saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

  scene.add(saturn);
}

function addSaturnRings() {
  var radius = 5, segments = 32, rotation = 5;
  var saturnRingGeometry = new THREE.xRingGeometry(1.2 * radius, 2 * radius, 2 * segments, 5, 0, Math.PI * 2);
  var saturnRingMaterial  = new THREE.MeshBasicMaterial({});


  var saturnRingIMG = new THREE.ImageLoader();

  saturnRingIMG.load( "https://cdn.rawgit.com/bubblin/The-Solar-System/master/images/page-60/saturn-rings.png", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.side = THREE.DoubleSide;
    texture.image = image;
    texture.opacity = 0.6;
    texture.transparent = true;
    texture.needsUpdate = true;

    saturnRingMaterial.map = texture;
    saturnRingMaterial.needsUpdate = true;
  });


  saturnrings = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

  scene.add(saturnrings);
}

function addUranus() {
  var uranusGeometry = new THREE.SphereGeometry(5, 32, 32);
  var uranusMaterial  = new THREE.MeshPhongMaterial({});


  var uranusIMG = new THREE.ImageLoader();

  uranusIMG.load( "../img/uranus.png", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    uranusMaterial.map = texture;
    uranusMaterial.needsUpdate = true;
  });


  uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

  scene.add(uranus);
}

function addNeptune() {
  var neptuneGeometry = new THREE.SphereGeometry(3, 32, 32);
  var neptuneMaterial  = new THREE.MeshPhongMaterial({});


  var neptuneIMG = new THREE.ImageLoader();

  neptuneIMG.load( "../img/neptune.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    neptuneMaterial.map = texture;
    neptuneMaterial.needsUpdate = true;
  });


  neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

  scene.add(neptune);
}

function addPluto() {
  var plutoGeometry = new THREE.SphereGeometry(3, 32, 32);
  var plutoMaterial  = new THREE.MeshPhongMaterial({});


  var plutoIMG = new THREE.ImageLoader();

  plutoIMG.load( "../img/pluto.jpg", function (image) {
    let texture = new THREE.Texture();
    texture.minFilter = THREE.LinearFilter;
    texture.image = image;
    texture.needsUpdate = true;

    plutoMaterial.map = texture;
    plutoMaterial.needsUpdate = true;
  });


  pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);

  scene.add(pluto);
}

function render() {
    //group = new THREE.Group();

    //sun.position.set( -80, 0, 0 );
    mercury.position.set(-40, 0, 0);
    venus.position.set(-20,0,0);
    earth.position.set(0,0,0);
    mars.position.set(30,0,0);
    jupiter.position.set(60,0,0);
    //saturn.position.set(20,0,0);
    //saturnrings.position.set(20,0,0);
    //uranus.position.set(40,0,0);
    //neptune.position.set(60,0,0);
    //pluto.position.set(80,0,0);

    requestAnimationFrame(render);

    mercury.rotation.y += 0.010;
    venus.rotation.y += 0.010;
    earth.rotation.y += 0.010;
    mars.rotation.y += 0.010;
    jupiter.rotation.y += 0.010;
    //saturn.rotation.y += 0.010;
    //saturnrings.rotation.y += 0.005;
    //uranus.rotation.y += 0.010;
    //pluto.rotation.y += 0.010;
    renderer.render(scene, camera);
}
init();
