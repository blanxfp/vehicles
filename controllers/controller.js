"use strict";
var car;
var cars = new Array();
var ui;
// DOM Events
var carForm = document.getElementById('car-form');
carForm === null || carForm === void 0 ? void 0 : carForm.addEventListener('submit', function (e) {
    if (carValidate()) {
        var plate = document.getElementById('plate').value;
        var brand = document.getElementById('brand').value;
        var color = document.getElementById('color').value;
        // Create a new Oject Car
        car = new Car(plate, brand, color);
        cars.push(car);
        ui = new UI();
        ui.addCar(car);
        ui.resetForm();
    }
    e.preventDefault();
});
var carInfo = document.getElementById('carInfo');
carInfo === null || carInfo === void 0 ? void 0 : carInfo.addEventListener('click', function (e) {
    var thisTarget = e.target;
    if (thisTarget.name === 'add_wheels') {
        var wheelsInfo_1 = document.querySelector('.wheels-info');
        wheelsInfo_1 === null || wheelsInfo_1 === void 0 ? void 0 : wheelsInfo_1.classList.remove('d-none');
        var currElement = e.currentTarget;
        var currPlate_1 = currElement.querySelector('.car-plate').textContent;
        var wheelsForm_1 = document.getElementById('wheels-form');
        wheelsForm_1.addEventListener('submit', function (event) {
            if (wheelValidate()) {
                var brand1 = document.getElementById('brand1').value;
                var diameter1 = document.getElementById('diameter1').value;
                var brand2 = document.getElementById('brand2').value;
                var diameter2 = document.getElementById('diameter2').value;
                var brand3 = document.getElementById('brand3').value;
                var diameter3 = document.getElementById('diameter3').value;
                var brand4 = document.getElementById('brand4').value;
                var diameter4 = document.getElementById('diameter4').value;
                var currCar = cars.find(function (car) { return car.plate === currPlate_1; });
                // Create a new Oject Wheel
                currCar.addWheel(new Wheel(diameter1, brand1));
                currCar.addWheel(new Wheel(diameter2, brand2));
                currCar.addWheel(new Wheel(diameter3, brand3));
                currCar.addWheel(new Wheel(diameter4, brand4));
                var carInfo_1 = document.getElementById('carInfo');
                var element = document.createElement('div');
                element.innerHTML = "\n                    <div class=\"card text-center mb-4\">\n                        <div class=\"card-body\">\n                            <strong>PLATE:</strong> " + currCar.plate + " -\n                            <strong>COLOR:</strong> " + currCar.color + " - \n                            <strong>BRAND:</strong> " + currCar.brand + " - \n                            <strong>WHEELS:</strong> " + JSON.stringify(currCar.wheels) + "\n                        </div>\n                    </div>\n                ";
                carInfo_1.replaceChild(element, thisTarget.closest('.card').parentElement);
                wheelsForm_1.reset();
                wheelsInfo_1 === null || wheelsInfo_1 === void 0 ? void 0 : wheelsInfo_1.classList.add('d-none');
            }
            event.preventDefault();
        });
    }
});
