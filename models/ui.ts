class UI {
    addCar(car) {
        const carInfo = document.getElementById('carInfo');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>PLATE:</strong><span class="car-plate">${car.plate}</span> -
                    <strong>COLOR:</strong><span class="car-color">${car.color}</span> - 
                    <strong>BRAND:</strong><span class="car-brand">${car.brand}</span> - 
                    <strong>WHEELS:</strong> ${JSON.stringify(car.wheels)}
                    <a href="#" class="btn btn-danger" name="add_wheels">Add Wheels</a>
                </div>
            </div>
        `;
        carInfo.appendChild(element);
        // this.resetForm();
    }

    resetForm() {
        carForm.reset();
    }
}
