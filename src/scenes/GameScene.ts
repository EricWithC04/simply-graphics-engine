import { IScene } from "./IScene";
import { Entity } from "../entities";
import { PositionComponent } from "../entities/components/PositionComponent";
import { RenderRectComponent } from "../entities/components/RenderRectComponent";
import { ColliderComponent } from "../entities/components/ColliderComponent";
// import { SpriteRenderComponent } from "../entities/components/SpriteRenderComponent";
import { VelocityComponent } from "../entities/components/VelocityComponent";
import { KeyboardInputComponent } from "../entities/components/KeyboardInputComponent";
import { AnimatedSpriteComponent } from "../entities/components/AnimatedSpriteComponent";
import { Animation } from "../graphics/Animation";
import { SpriteSheet } from "../graphics/SpriteSheet";

import { CollisionSystem } from "../systems/CollisionSystem";

export class GameScene implements IScene {
    private entities: Entity[] = [];
    private collisionSystem: CollisionSystem = new CollisionSystem()

    constructor(playerImage: HTMLImageElement) {
        const player = new Entity();

        const position = new PositionComponent(100, 100)
        const velocity = new VelocityComponent(position)
        const input = new KeyboardInputComponent(velocity)

        const spriteSheet = new SpriteSheet(playerImage, 205, 800)
        const animation = new Animation(spriteSheet, [0, 1, 2, 3, 4, 5], 0.1)
        const animatedSpriteSheet = new AnimatedSpriteComponent(animation, position)
        const collider = new ColliderComponent(position, 205, 800)

        player
            .addComponent(position)
            .addComponent(velocity)
            .addComponent(input)
            .addComponent(animatedSpriteSheet)
            .addComponent(collider)

        this.entities.push(player)
        this.collisionSystem.addCollider(collider)
        
        const obstacle = new Entity();
        const obstaclePosition = new PositionComponent(500, 100)
        const obstacleRect = new RenderRectComponent(obstaclePosition, 100, 100, "red")
        const obstacleCollider = new ColliderComponent(obstaclePosition, 100, 100)

        obstacle.addComponent(obstaclePosition);
        obstacle.addComponent(obstacleRect);
        obstacle.addComponent(obstacleCollider);
        
        this.entities.push(obstacle)
        this.collisionSystem.addCollider(obstacleCollider)
    }

    update(dt: number): void {
        this.entities.forEach(entity => entity.update(dt))
        this.collisionSystem.update()  
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.entities.forEach(entity => entity.render(ctx));
    }
}
