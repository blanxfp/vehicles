let car: Car;
let cars:Car[] = new Array();
let ui: UI;

// DOM Events
let carForm = document.getElementById('car-form');
carForm?.addEventListener('submit', function (e) {
    if(carValidate()) {
        const plate: string = document.getElementById('plate').value;
        const brand:string = document.getElementById('brand').value;
        const color:string = document.getElementById('color').value;
            
        // Create a new Oject Car
        car = new Car(plate, brand, color);
        cars.push(car);

        ui = new UI();
        ui.addCar(car);
        ui.resetForm();
    }
    e.preventDefault();
});



const carInfo = document.getElementById('carInfo');
carInfo?.addEventListener('click', function(e) {
    let thisTarget = e.target;
    if(thisTarget.name === 'add_wheels') {
        let wheelsInfo = document.querySelector('.wheels-info');
        wheelsInfo?.classList.remove('d-none');
        let currElement = e.currentTarget;
        let currPlate = currElement.querySelector('.car-plate').textContent;

        let wheelsForm = document.getElementById('wheels-form');
                
        wheelsForm.addEventListener('submit', function (event) {
            if(wheelValidate()) {
                const brand1: string = document.getElementById('brand1').value;
                const diameter1: number = document.getElementById('diameter1').value;
                const brand2: string = document.getElementById('brand2').value;
                const diameter2: number = document.getElementById('diameter2').value;
                const brand3: string = document.getElementById('brand3').value;
                const diameter3: number = document.getElementById('diameter3').value;
                const brand4: string = document.getElementById('brand4').value;
                const diameter4: number = document.getElementById('diameter4').value;

                let currCar = cars.find(car => car.plate === currPlate);
                
                // Create a new Oject Wheel
                currCar.addWheel(new Wheel(diameter1, brand1));
                currCar.addWheel(new Wheel(diameter2, brand2));
                currCar.addWheel(new Wheel(diameter3, brand3));                
                currCar.addWheel(new Wheel(diameter4, brand4));
                const carInfo = document.getElementById('carInfo');
                const element = document.createElement('div');
                element.innerHTML = `
                    <div class="card text-center mb-4">
                        <div class="card-body">
                            <strong>PLATE:</strong> ${currCar.plate} -
                            <strong>COLOR:</strong> ${currCar.color} - 
                            <strong>BRAND:</strong> ${currCar.brand} - 
                            <strong>WHEELS:</strong> ${JSON.stringify(currCar.wheels)}
                        </div>
                    </div>
                `;
                carInfo.replaceChild(element, thisTarget.closest('.card').parentElement;
                wheelsForm.reset();
                wheelsInfo?.classList.add('d-none');
            }
            event.preventDefault();

        });
    }
})


