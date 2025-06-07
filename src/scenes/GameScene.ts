import { IScene } from "./IScene";
import { Entity } from "../entities";
import { PositionComponent } from "../entities/components/PositionComponent";
// import { SpriteRenderComponent } from "../entities/components/SpriteRenderComponent";
import { VelocityComponent } from "../entities/components/VelocityComponent";
import { KeyboardInputComponent } from "../entities/components/KeyboardInputComponent";
import { AnimatedSpriteComponent } from "../entities/components/AnimatedSpriteComponent";
import { Animation } from "../graphics/Animation";
import { SpriteSheet } from "../graphics/SpriteSheet";

export class GameScene implements IScene {
    private player: Entity;

    constructor(playerImage: HTMLImageElement) {
        const position = new PositionComponent(100, 100)
        // const sprite = new SpriteRenderComponent(position, playerImage, 50, 50)
        const velocity = new VelocityComponent(position)
        const input = new KeyboardInputComponent(velocity)

        const spriteSheet = new SpriteSheet(playerImage, 205, 800)
        const animation = new Animation(spriteSheet, [0, 1, 2, 3, 4, 5], 0.1)
        const animatedSpriteSheet = new AnimatedSpriteComponent(animation, position)

        this.player = new Entity()
            .addComponent(position)
            // .addComponent(sprite)
            .addComponent(velocity)
            .addComponent(input)
            .addComponent(animatedSpriteSheet)
    }

    update(dt: number): void {
        this.player.update(dt)
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.player.render(ctx)
    }
}
