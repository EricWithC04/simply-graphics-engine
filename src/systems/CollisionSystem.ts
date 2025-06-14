import { ColliderComponent } from "../entities/components/ColliderComponent";

export class CollisionSystem {
    private colliders: ColliderComponent[] = [];

    addCollider(collider: ColliderComponent) {
        this.colliders.push(collider);
    }

    renderDebug(ctx: CanvasRenderingContext2D) {
        this.colliders.forEach(collider => collider.renderDebug(ctx))
    }

    update() {
        for (let i = 0; i < this.colliders.length; i++) {
            for (let j = i+1; j < this.colliders.length; j++) {
                
                const a = this.colliders[i]
                const b = this.colliders[j]

                if (a.isCollidingWith(b)) {
                    console.log("Se a detectado una colisión, felicidades");
                }

            }
        }
    }
}