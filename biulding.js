class Building {
    constructor(numFloors, numElevators) {
        this.numFloors = numFloors;
        this.elevators = [];
        let x = 50;
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator(x))
            x += 50;
        }
    }
}


