const audio = new Audio('ding.mp3');
const elevators = [];
const queue = [];
class Elevator {
    constructor(x) {
        this.x = x;
        this.currentFloor = 1;
        this.isMoving = false;
        this.elevatorElement = null;
        this.animationTimeout = null;
        this.htmlElement = this.createHTMLElement();
        elevators.push(this);
    }
    setElement(element) {
        this.elevatorElement = element;
    }
    requestElevator(floorNumber) {
        if (floorNumber === this.currentFloor) {
            console.log(`Elevator is already on Floor ${floorNumber}`);
            return;
        }

        const travelDistance = Math.abs((floorNumber - this.currentFloor) * 110);
        this.moveTo(floorNumber, travelDistance);
    }
    moveTo(floorNumber, travelDistance) {
        if (floorNumber === this.currentFloor) {
            console.log(`Elevator is already on Floor ${floorNumber}`);
            return;
        }
    
        setTimeout(() => {
            this.isMoving = true;
            const floorHeight = 110;
            const targetPosition = (floorNumber - 1) * floorHeight;
            console.log(targetPosition, 'targetPosition');
            console.log(travelDistance, 'travelDistance');
            this.elevatorElement.style.transition = 'transform 2s';
            this.elevatorElement.style.transform = `translateY(-${targetPosition}px)`;
            console.log(this.currentFloor);
            this.animationTimeout = setTimeout(() => {
                this.currentFloor = floorNumber;
                console.log(`Elevator arrived at Floor ${this.currentFloor} the elevator number is ${this.x}`);
                this.isMoving = false;
                this.elevatorElement.style.transition = 'none';
                audio.play();
    
                const callButton = document.getElementById(`call-button-${floorNumber}`);
                if (callButton) {
                    callButton.style.color = 'green';
                    audio.addEventListener('ended', () => {
                        callButton.style.color = '';
                    }, { once: true });
                }
    
                processQueue();
            }, 2000);
        }, this.isMoving ? 2000 : 0);
    }
    
    createHTMLElement() {
        let marginLeft = 100;
        const elevatorElement = document.createElement('div');
        elevatorElement.className = 'elevator';
        const image = document.createElement('img');
        image.src = 'elv.png';
        image.width = 60;
        elevatorElement.appendChild(image);
        elevatorElement.style.left = `${marginLeft + this.x}px`;
        elevatorElement.style.bottom = '0';
        elevatorElement.style.transform = 'translateY(0)';

        const elevator = {
            currentFloor: 1,
            htmlElement: elevatorElement,
        };
        document.getElementById('building-container').appendChild(elevatorElement);
        this.setElement(elevatorElement);
        return elevatorElement;
    }

}
function requestElevator(floorNumber) {
    queue.push(floorNumber);
    processQueue();
}
function processQueue() {
    if (queue.length === 0) {
        elevators.forEach(elevator => {
            elevator.isMoving = false;
        });
        return;
    }

    const availableElevators = elevators.filter(elevator => !elevator.isMoving);
    if (availableElevators.length === 0) {
        return;
    }

    const request = queue.shift();
    const closestElevator = findClosestElevator(request, availableElevators);
    const travelDistance = Math.abs((request - closestElevator.currentFloor) * 110);
    closestElevator.moveTo(request, travelDistance);
} 


function findClosestElevator(floorNumber, elevators) {
    let closestElevator = null;
    let minTime = Infinity;
    for (const elevator of elevators) {
        if (!elevator.isMoving) {
            const distance = Math.abs((floorNumber - elevator.currentFloor) * 110);
            const travelTime = distance / 55;
            const totalTime = travelTime + (elevator.currentFloor !== floorNumber ? 2 : 0); 
            if (totalTime < minTime) {
                minTime = totalTime;
                closestElevator = elevator;
            }
        }
    }
    return closestElevator;
}
