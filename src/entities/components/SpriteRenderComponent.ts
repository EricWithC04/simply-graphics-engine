import { PositionComponent } from "./PositionComponent";

export class SpriteRenderComponent {
    constructor (
        private position: PositionComponent,
        private image: HTMLImageElement,
        private width: number,
        private height: number,
    ) {}

    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}