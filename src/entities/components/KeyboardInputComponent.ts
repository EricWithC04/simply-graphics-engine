import { VelocityComponent } from "./VelocityComponent";

export class KeyboardInputComponent {
    private keys: Set<string> = new Set()

    constructor(private velocity: VelocityComponent, private speed: number = 100) {
        window.addEventListener("keydown", (e) => this.keys.add(e.key))
        window.addEventListener("keyup", (e) => this.keys.delete(e.key))
    }

    update(_: number) {
        this.velocity.vx = 0;
        this.velocity.vy = 0;

        if (this.keys.has("ArrowLeft") || this.keys.has("a")) this.velocity.vx = -this.speed 
        if (this.keys.has("ArrowRight") || this.keys.has("d")) this.velocity.vx = this.speed 
        if (this.keys.has("ArrowUp") || this.keys.has("w")) this.velocity.vy = -this.speed 
        if (this.keys.has("ArrowDown") || this.keys.has("s")) this.velocity.vy = this.speed 
    }
}