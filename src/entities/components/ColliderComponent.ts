import { PositionComponent } from "./PositionComponent";

export class ColliderComponent {
    constructor (
        public position: PositionComponent,
        public width: number,
        public height: number
    ) {}

    get bounds() {
        return {
            x: this.position.x,
            y: this.position.y,
            width: this.width,
            height: this.height
        }
    }

    isCollidingWith(other: ColliderComponent): boolean {
        const a = this.bounds
        const b = other.bounds

        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        )
    }
}