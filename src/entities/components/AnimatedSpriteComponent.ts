import { Animation } from "../../graphics/Animation";
import { PositionComponent } from "./PositionComponent";

export class AnimatedSpriteComponent {
    constructor (
        public animation: Animation,
        public position: PositionComponent
    ) {}

    update(deltaTime: number) {
        this.animation.update(deltaTime)
    }

    render(ctx: CanvasRenderingContext2D) {
        const frame = this.animation.getCurrentFrame()
        ctx.drawImage(
            this.animation.spriteSheet.image, 
            frame.sx, frame.sy, frame.sw, frame.sh, 
            this.position.x, this.position.y, 
            frame.sw, frame.sh
        )
    }
}