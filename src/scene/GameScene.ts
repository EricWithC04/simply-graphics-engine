import { IScene } from "./IScene";
import { Entity } from "../entities";
import { PositionComponent } from "../entities/components/PositionComponent";
import { SpriteRenderComponent } from "../entities/components/SpriteRenderComponent";

export class GameScene implements IScene {
    private player: Entity;

    constructor(playerImage: HTMLImageElement) {
        const position = new PositionComponent(100, 100)
        const sprite = new SpriteRenderComponent(position, playerImage, 50, 50)

        this.player = new Entity()
            .addComponent(position)
            .addComponent(sprite)
    }

    update(dt: number): void {
        this.player.update(dt)
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.player.render(ctx)
    }
}
