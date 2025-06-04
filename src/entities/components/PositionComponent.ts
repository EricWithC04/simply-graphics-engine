export class PositionComponent {
    constructor(public x: number, public y: number) {}

    update(delta: number): void {
        this.x += 10 * delta
    }
}