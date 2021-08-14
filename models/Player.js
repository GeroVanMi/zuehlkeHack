export default class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    addPoints(points) {
        this.points += points;
    }

    resetPoints() {
        this.points = 0;
    }
}
