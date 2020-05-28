"use strict";
var carForm = document.getElementById('car-form');
function carValidate() {
    var acumErrores = 0;
    carForm.classList.remove('is-invalid');
    //var inputEmail = document.forms["myForm"]["inputEmail"];
    var plate = document.getElementById('plate');
    var brand = document.getElementById('brand');
    var color = document.getElementById('color');
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    else if (!validar_matricula(plate.value)) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "La matrícula no cumple el formato";
        acumErrores++;
    }
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        document.getElementById("errorBrand").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        document.getElementById("errorColor").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
carForm.addEventListener('blur', function (event) {
    console.log(event);
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
function validar_matricula(plate) {
    var regex = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
    return regex.test(plate) ? true : false;
}
var wheelsForm = document.getElementById('wheels-form');
function wheelValidate() {
    var acumErrores = 0;
    wheelsForm.classList.remove('is-invalid');
    //var inputEmail = document.forms["myForm"]["inputEmail"];
    var brand1 = document.getElementById('brand1');
    var brand2 = document.getElementById('brand2');
    var brand3 = document.getElementById('brand3');
    var brand4 = document.getElementById('brand4');
    var diameter1 = document.getElementById('diameter1');
    var diameter2 = document.getElementById('diameter2');
    var diameter3 = document.getElementById('diameter3');
    var diameter4 = document.getElementById('diameter4');
    if (brand1.value == "") {
        brand1.classList.add("is-invalid");
        document.getElementById("errorBrand1").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (brand2.value == "") {
        brand2.classList.add("is-invalid");
        document.getElementById("errorBrand2").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (brand3.value == "") {
        brand3.classList.add("is-invalid");
        document.getElementById("errorBrand3").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (brand4.value == "") {
        brand4.classList.add("is-invalid");
        document.getElementById("errorBrand4").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (diameter1.value == "") {
        diameter1.classList.add("is-invalid");
        document.getElementById("errorDiameter1").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    else if (!(diameter1.value > 0.4 && diameter1.value < 2)) {
        diameter1.classList.add("is-invalid");
        document.getElementById("errorDiameter1").textContent = "El diametro tiene que ser menor que 2 y mayor que 0.4";
        acumErrores++;
    }
    if (diameter2.value == "") {
        diameter2.classList.add("is-invalid");
        document.getElementById("errorDiameter2").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    else if (!(diameter2.value > 0.4 && diameter2.value < 2)) {
        diameter2.classList.add("is-invalid");
        document.getElementById("errorDiameter2").textContent = "El diametro tiene que ser menor que 2 y mayor que 0.4";
        acumErrores++;
    }
    if (diameter3.value == "") {
        diameter3.classList.add("is-invalid");
        document.getElementById("errorDiameter3").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    else if (!(diameter3.value > 0.4 && diameter3.value < 2)) {
        diameter3.classList.add("is-invalid");
        document.getElementById("errorDiameter3").textContent = "El diametro tiene que ser menor que 2 y mayor que 0.4";
        acumErrores++;
    }
    if (diameter4.value == "") {
        diameter4.classList.add("is-invalid");
        document.getElementById("errorDiameter4").textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    else if (!(diameter4.value > 0.4 && diameter4.value < 2)) {
        diameter4.classList.add("is-invalid");
        document.getElementById("errorDiameter4").textContent = "El diametro tiene que ser menor que 2 y mayor que 0.4";
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
wheelsForm.addEventListener('blur', function (event) {
    console.log(event);
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
