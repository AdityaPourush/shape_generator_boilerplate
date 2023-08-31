var button = document.getElementById("button")
console.log("button: ", button);

var numberInsideShape = 1
var lastShapeNumber = 0

button.onclick = () =>{
    var n = document.getElementById("number").value
    console.log("n:",n);


    var circle = document.getElementById("circle").checked
    console.log("circle: ",circle);

    var rectangle = document.getElementById("rectangle").checked
    console.log("rectangle: ", rectangle)

    var square = document.getElementById("square").checked
    console.log("square: ", square)

    var TotalShapes = Number(lastShapeNumber) + Number(n)
    console.log("TotalShapes: ",TotalShapes);

    var box = document.getElementById("box")

    var shape = document.createElement("div")

    shape.innerHTML = numberInsideShape

    // if(square == true) {
    //     shape.classList.add("square");
    // }
    // else if (circle == true){
    //     shape.classList.add("circle");
    // }
    // else if (rectangle == true){
    //     shape.classList.add("rectangle");
    // }

    // box.append(shape)

    for(let i=numberInsideShape;i<=TotalShapes;i++){
        var shape = document.createElement("div")

    shape.innerHTML = numberInsideShape
    
    numberInsideShape = numberInsideShape + 1 

    if(square == true) {
        shape.classList.add("square");
    }
    else if (circle == true){
        shape.classList.add("circle");
    }
    else if (rectangle == true){
        shape.classList.add("rectangle");
    }

    box.append(shape);
    lastShapeNumber = box.lastElementChild.innerHTML
    }
}