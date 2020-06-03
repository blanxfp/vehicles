"use strict";
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
    var brands = document.querySelectorAll('.brand-wheel');
    var diameters = document.querySelectorAll('.diameter-wheel');
    brands.forEach(function (brand) {
        if (brand.value == "") {
            brand.classList.add("is-invalid");
            brand.nextElementSibling.textContent = "Es campo es obligatorio";
            acumErrores++;
        }
    });
    diameters.forEach(function (diameter) {
        if (diameter.value == "") {
            diameter.classList.add("is-invalid");
            diameter.nextElementSibling.textContent = "Es campo es obligatorio";
            acumErrores++;
        }
        else if (!(diameter.value > 0.4 && diameter.value < 2)) {
            diameter.classList.add("is-invalid");
            diameter.nextElementSibling.textContent = "El diametro tiene que ser menor que 2 y mayor que 0.4";
            acumErrores++;
        }
    });
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
wheelsForm.addEventListener('blur', function (event) {
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
