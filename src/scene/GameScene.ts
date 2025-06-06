import { IScene } from "./IScene";
import { Entity } from "../entities";
import { PositionComponent } from "../entities/components/PositionComponent";
import { SpriteRenderComponent } from "../entities/components/SpriteRenderComponent";
import { VelocityComponent } from "../entities/components/VelocityComponent";
import { KeyboardInputComponent } from "../entities/components/KeyboardInputComponent";

export class GameScene implements IScene {
    private player: Entity;

    constructor(playerImage: HTMLImageElement) {
        const position = new PositionComponent(100, 100)
        const sprite = new SpriteRenderComponent(position, playerImage, 50, 50)
        const velocity = new VelocityComponent(position)
        const input = new KeyboardInputComponent(velocity)

        this.player = new Entity()
            .addComponent(position)
            .addComponent(sprite)
            .addComponent(velocity)
            .addComponent(input)
    }

    update(dt: number): void {
        this.player.update(dt)
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.player.render(ctx)
    }
}
