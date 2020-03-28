//Create an Empty Scene
var scene = new THREE.Scene();
//Create a Basic Camera, so we can veiw our 3d space
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
//Create a Renderer with AnitAliasing
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
//Uses a method to set a clear color to our renderer
renderer.setClearColor('#000000');
//Uses a method to set size to our renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
//Appends our renderer as a DOM element to the <body> of our index.html page
document.body.appendChild(renderer.domElement);

//Creates a Geometry Object, takes 3 parameters, width, height, depth in pixels
var geometry = new THREE.SphereGeometry(50,50,50);
//Creates a Material to cover the geomety mesh, BasicMaterial is a flat color
var material = new THREE.MeshBasicMaterial({
    color: "yellow"
});
//creates the mesh based on what we have defined in our geometry and material objects above
var mesh = new THREE.Mesh(geometry, material);
//adjusts the position of the mesh object on its z axis
mesh.position.z = -1000;

scene.add(mesh);

renderer.render(scene, camera);
