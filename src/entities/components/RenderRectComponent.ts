import { PositionComponent } from "./PositionComponent";

export class RenderRectComponent {
    constructor (
        private position: PositionComponent,
        private width: number,
        private height: number,
        private color: string
    ) {}

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}