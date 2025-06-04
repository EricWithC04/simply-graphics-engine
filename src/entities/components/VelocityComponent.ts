import { PositionComponent } from "./PositionComponent";

export class VelocityComponent {
    constructor(
        private position: PositionComponent,
        public vx: number = 0, 
        public vy: number = 0
    ) {}

    update(delta: number): void {
        this.position.x += this.vx * delta
        this.position.y += this.vy * delta
    }
}