const floors = 15;
const elevators = 3;

document.addEventListener('DOMContentLoaded', () => {
    const building = new Building(floors,elevators); 
    renderFloors(building);
});
function renderFloors(building) {
    const buildingContainer = document.getElementById('building-container');
    for (let i = building.numFloors; i > 0; i--) {
        const floor = document.createElement('div');
        floor.className = 'floor';
        const button = document.createElement('button');
        button.id = `call-button-${i}`;
        button.className = 'metal linear';
        button.textContent = i;
        button.onclick = function() {
            button.style.color = 'green';
            const targetFloor = parseInt(button.textContent);
            const closestElevator =findClosestElevator(targetFloor, building.elevators);
            closestElevator.requestElevator(targetFloor);
        };
      
        floor.appendChild(button);
        buildingContainer.appendChild(floor);
        document.getElementById('building-container').appendChild(floor);
    }
}



