import { PositionComponent } from "./PositionComponent";

export class VelocityComponent {
    constructor(
        private position: PositionComponent,
        public vx: number, 
        public vy: number
    ) {}

    update(delta: number): void {
        this.position.x += this.vx * delta
        this.position.y += this.vy * delta
    }
}