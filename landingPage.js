let scene, PerspectiveCamera, webGL_Renderer, starGeometry, starsPoints;

function initialize() {
  scene = new THREE.Scene();

  PerspectiveCamera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  PerspectiveCamera.position.z = 1;
  PerspectiveCamera.rotation.x = Math.PI / 2;

  webGL_Renderer = new THREE.WebGLRenderer();
  webGL_Renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(webGL_Renderer.domElement);
  starGeometry = new THREE.Geometry();
  for (let i = 0; i < 6000; i++) {
    let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.02;
    starGeometry.vertices.push(star);
  }
  let sprite = new THREE.TextureLoader().load("image.png");
  console.log(sprite);
  let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite,
  });
  starsPoints = new THREE.Points(starGeometry, starMaterial);
  scene.add(starsPoints);
  animate();
}
//rendering loop
function animate() {
  starGeometry.vertices.forEach((p) => {
    p.velocity += p.acceleration;
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  starGeometry.verticesNeedUpdate = true;

  starsPoints.rotation.y += 0.002;
  webGL_Renderer.render(scene, PerspectiveCamera);
  requestAnimationFrame(animate);
}

// initialize();

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 40,
  // loop:true,
  backSpeed: 20,
});

const earthPage = () => {
  window.open("./Earth/Earth.html", "_self");
};
