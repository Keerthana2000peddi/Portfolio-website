// GSAP entrance animations
gsap.from(".hero h2", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero p", { y: 20, opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".btn", { scale: 0, opacity: 0, duration: 1, delay: 1 });

gsap.from(".about-text", {
  scrollTrigger: ".about-text",
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".project-card", {
  scrollTrigger: ".project-card",
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
// Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x1abc9c });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
