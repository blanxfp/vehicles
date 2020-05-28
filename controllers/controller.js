"use strict";
var car;
// DOM Events
var carForm = document.getElementById('car-form');
if (carForm !== null) {
    carForm.addEventListener('submit', function (e) {
        if (carValidate()) {
            var plate = document.getElementById('plate').value;
            var brand = document.getElementById('brand').value;
            var color = document.getElementById('color').value;
            // Create a new Oject Car
            car = new Car(plate, brand, color);
            var carInfo = document.getElementById('carInfo');
            var element = document.createElement('div');
            element.innerHTML = "\n                <div class=\"card text-center mb-4\">\n                    <div class=\"card-body\">\n                        <strong>PLATE:</strong> " + car.plate + " -\n                        <strong>COLOR:</strong> " + car.color + " - \n                        <strong>BRAND:</strong> " + car.brand + " - \n                        <strong>WHEELS:</strong> " + JSON.stringify(car.wheels) + "\n                        <a href=\"#\" class=\"btn btn-danger\" name=\"add_wheels\">Add Wheels</a>\n                    </div>\n                </div>\n            ";
            carInfo.appendChild(element);
            addWheels();
        }
        e.preventDefault();
    });
}
function addWheels() {
    function showWheelForm() {
        var wheelsInfo = document.querySelector('.wheels-info');
        wheelsInfo === null || wheelsInfo === void 0 ? void 0 : wheelsInfo.classList.remove('d-none');
    }
    var addWheels = document.querySelectorAll('a[name=add_wheels]');
    if (addWheels.length) {
        addWheels.forEach(function (addWheel) {
            addWheel.addEventListener('click', showWheelForm);
            var wheelsForm = document.getElementById('wheels-form');
            if (wheelsForm !== null) {
                wheelsForm.addEventListener('submit', function (e) {
                    if (wheelValidate()) {
                        var brand1 = document.getElementById('brand1').value;
                        var diameter1 = document.getElementById('diameter1').value;
                        var brand2 = document.getElementById('brand2').value;
                        var diameter2 = document.getElementById('diameter2').value;
                        var brand3 = document.getElementById('brand3').value;
                        var diameter3 = document.getElementById('diameter3').value;
                        var brand4 = document.getElementById('brand4').value;
                        var diameter4 = document.getElementById('diameter4').value;
                        // Create a new Oject Wheel
                        car.addWheel(new Wheel(diameter1, brand1));
                        car.addWheel(new Wheel(diameter2, brand2));
                        car.addWheel(new Wheel(diameter3, brand3));
                        car.addWheel(new Wheel(diameter4, brand4));
                        var carInfo = document.getElementById('carInfo');
                        carInfo === null || carInfo === void 0 ? void 0 : carInfo.removeChild(carInfo.firstChild);
                        var element = document.createElement('div');
                        element.innerHTML = "\n                            <div class=\"card text-center mb-4\">\n                                <div class=\"card-body\">\n                                    <strong>PLATE:</strong> " + car.plate + " -\n                                    <strong>COLOR:</strong> " + car.color + " - \n                                    <strong>BRAND:</strong> " + car.brand + " - \n                                    <strong>WHEELS:</strong> " + JSON.stringify(car.wheels) + "\n                                </div>\n                            </div>\n                        ";
                        carInfo.appendChild(element);
                    }
                    e.preventDefault();
                });
            }
        });
    }
}
