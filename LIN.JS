objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('https://static.wikia.nocookie.net/skibidi-toilet-official/images/6/6c/34-LargeRedSuitedCameramanTransparent.png/revision/latest?cb=20230930193614');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estatus: detectando objetos";
}

function modelLoaded() {
  console.log("¡Modelo cargado!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
if (error) {
console.log(error);
} else {
console.log(results);
objects=results;

}
}


function draw() {
  image(img, 0, 0, 640, 420);

      if(status != "")
      {
        for (var i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Estatus: objeto detectado";


        }
      }
}
