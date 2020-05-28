"use strict";
var car;
// DOM Events
var productForm = document.getElementById('product-form');
if (productForm !== null) {
    productForm.addEventListener('submit', function (e) {
        var plate = document.getElementById('plate').value;
        var brand = document.getElementById('brand').value;
        var color = document.getElementById('color').value;
        // Create a new Oject Car
        var car = new Car(plate, brand, color);
        // car.addWheel(new Wheel(2,"SEAT"));
        var carInfo = document.getElementById('carInfo');
        var element = document.createElement('div');
        element.innerHTML = "\n            <div class=\"card text-center mb-4\">\n                <div class=\"card-body\">\n                    <strong>PLATE:</strong> " + car.plate + " -\n                    <strong>COLOR:</strong> " + car.color + " - \n                    <strong>BRAND:</strong> " + car.brand + " - \n                    <strong>WHEELS:</strong> " + JSON.stringify(car.wheels) + "\n                    <a href=\"#\" class=\"btn btn-danger\" name=\"delete\">Add Wheels</a>\n                </div>\n            </div>\n        ";
        console.log(element);
        carInfo.appendChild(element);
        e.preventDefault();
    });
}
