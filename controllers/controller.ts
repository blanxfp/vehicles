
let car: Car;

// DOM Events

let productForm = document.getElementById('product-form');
if (productForm !== null) {
    productForm.addEventListener('submit', function (e) {
        const plate: string = document.getElementById('plate').value;
        const brand:string = document.getElementById('brand').value;
        const color:string = document.getElementById('color').value;
           
        // Create a new Oject Car
        car = new Car(plate, brand, color);
    
        // car.addWheel(new Wheel(2,"SEAT"));

        const carInfo = document.getElementById('carInfo');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>PLATE:</strong> ${car.plate} -
                    <strong>COLOR:</strong> ${car.color} - 
                    <strong>BRAND:</strong> ${car.brand} - 
                    <strong>WHEELS:</strong> ${JSON.stringify(car.wheels)}
                    <a href="#" class="btn btn-danger" name="delete">Add Wheels</a>
                </div>
            </div>
        `;
        carInfo.appendChild(element);

    
        e.preventDefault();
    });

}

