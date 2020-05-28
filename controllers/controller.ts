
let car: Car;

// DOM Events
let carForm = document.getElementById('car-form');
if (carForm !== null) {
    carForm.addEventListener('submit', function (e) {
        if(carValidate()) {
            const plate: string = document.getElementById('plate').value;
            const brand:string = document.getElementById('brand').value;
            const color:string = document.getElementById('color').value;
               
            // Create a new Oject Car
            car = new Car(plate, brand, color);
        
    
            const carInfo = document.getElementById('carInfo');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>PLATE:</strong> ${car.plate} -
                        <strong>COLOR:</strong> ${car.color} - 
                        <strong>BRAND:</strong> ${car.brand} - 
                        <strong>WHEELS:</strong> ${JSON.stringify(car.wheels)}
                        <a href="#" class="btn btn-danger" name="add_wheels">Add Wheels</a>
                    </div>
                </div>
            `;
            carInfo.appendChild(element);  
            addWheels();  
        }
        e.preventDefault();
    });
}

function addWheels() {
    function showWheelForm() {
        let wheelsInfo = document.querySelector('.wheels-info');
        wheelsInfo?.classList.remove('d-none');
    
    }
    let addWheels = document.querySelectorAll('a[name=add_wheels]');
    if(addWheels.length) {
        addWheels.forEach(addWheel => {
            addWheel.addEventListener('click', showWheelForm);
            let wheelsForm = document.getElementById('wheels-form');
            if (wheelsForm !== null) {
                
                wheelsForm.addEventListener('submit', function (e) {
                    if(wheelValidate()) {
                        const brand1: string = document.getElementById('brand1').value;
                        const diameter1: number = document.getElementById('diameter1').value;
                        const brand2: string = document.getElementById('brand2').value;
                        const diameter2: number = document.getElementById('diameter2').value;
                        const brand3: string = document.getElementById('brand3').value;
                        const diameter3: number = document.getElementById('diameter3').value;
                        const brand4: string = document.getElementById('brand4').value;
                        const diameter4: number = document.getElementById('diameter4').value;
                        
                        // Create a new Oject Wheel
                        car.addWheel(new Wheel(diameter1, brand1));
                        car.addWheel(new Wheel(diameter2, brand2));
                        car.addWheel(new Wheel(diameter3, brand3));                
                        car.addWheel(new Wheel(diameter4, brand4));

                        const carInfo = document.getElementById('carInfo');
                        carInfo?.removeChild(carInfo.firstChild);
                        const element = document.createElement('div');
                        element.innerHTML = `
                            <div class="card text-center mb-4">
                                <div class="card-body">
                                    <strong>PLATE:</strong> ${car.plate} -
                                    <strong>COLOR:</strong> ${car.color} - 
                                    <strong>BRAND:</strong> ${car.brand} - 
                                    <strong>WHEELS:</strong> ${JSON.stringify(car.wheels)}
                                </div>
                            </div>
                        `;
                        carInfo.appendChild(element);  
                    }
                    e.preventDefault();
                });
            }



        });
    }    
}

