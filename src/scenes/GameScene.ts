import { IScene } from "./IScene";
import { Entity } from "../entities";
import { ColliderComponent } from "../entities/components/ColliderComponent";

import { CollisionSystem } from "../systems/CollisionSystem";

const DEBUG_MODE = false

export class GameScene implements IScene {
    private entities: Entity[] = [];
    private collisionSystem: CollisionSystem = new CollisionSystem()

    constructor(initialEntities: Entity[]) {
        initialEntities.forEach(ent => this.addEntity(ent));
    }

    addEntity(entity: Entity): void {
        this.entities.push(entity);
        const collider = entity.getComponent(ColliderComponent)
        if (collider) this.collisionSystem.addCollider(collider)
    }

    update(dt: number): void {
        this.entities.forEach(entity => entity.update(dt))
        this.collisionSystem.update()
    }
    
    render(ctx: CanvasRenderingContext2D): void {
        this.entities.forEach(entity => entity.render(ctx));
        if (DEBUG_MODE) this.collisionSystem.renderDebug(ctx)
    }
}
