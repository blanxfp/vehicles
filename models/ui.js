"use strict";
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addCar = function (car) {
        var carInfo = document.getElementById('carInfo');
        var element = document.createElement('div');
        element.innerHTML = "\n            <div class=\"card text-center mb-4\">\n                <div class=\"card-body\">\n                    <strong>PLATE:</strong><span class=\"car-plate\">" + car.plate + "</span> -\n                    <strong>COLOR:</strong><span class=\"car-color\">" + car.color + "</span> - \n                    <strong>BRAND:</strong><span class=\"car-brand\">" + car.brand + "</span> - \n                    <strong>WHEELS:</strong> " + JSON.stringify(car.wheels) + "\n                    <a href=\"#\" class=\"btn btn-danger\" name=\"add_wheels\">Add Wheels</a>\n                </div>\n            </div>\n        ";
        carInfo.appendChild(element);
        // this.resetForm();
    };
    UI.prototype.resetForm = function () {
        carForm.reset();
    };
    return UI;
}());
