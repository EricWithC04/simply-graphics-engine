import { Canvas } from "./core/Canvas";
import { GameLoop } from "./core/GameLoop";
import { Entity } from "./entities";

import { PositionComponent } from "./entities/components/PositionComponent";
import { RenderRectComponent } from "./entities/components/RenderRectComponent";
import { VelocityComponent } from "./entities/components/VelocityComponent";
import { KeyboardInputComponent } from "./entities/components/KeyboardInputComponent";
import { ColliderComponent } from "./entities/components/ColliderComponent";
import { SpriteRenderComponent } from "./entities/components/SpriteRenderComponent";

import { CollisionSystem } from "./systems/CollisionSystem";

import { AssetLoader } from "./assets/AssetLoader";

const canvas = new Canvas(800, 600)
const ctx = canvas.getContext();

const collisionSystem = new CollisionSystem()

const player = new Entity()
const position = new PositionComponent(100, 100)
// const renderer = new RenderRectComponent(position, 50, 50, "red")
const velocity = new VelocityComponent(position)
const input = new KeyboardInputComponent(velocity)

const playerCollider = new ColliderComponent(position, 50, 50)
collisionSystem.addCollider(playerCollider)

const obstacle = new Entity()
const obstaclePosition = new PositionComponent(100, 300)
const obstacleRenderer = new RenderRectComponent(obstaclePosition, 50, 50, "blue")
const obstacleCollider = new ColliderComponent(obstaclePosition, 50, 50)

collisionSystem.addCollider(obstacleCollider);

(async () => {
    const playerImage = await AssetLoader.loadImage("./tests/character_test_image.png")

    const renderer = new SpriteRenderComponent(position, playerImage, 50, 50)

    player
        .addComponent(position)
        .addComponent(velocity)
        .addComponent(input)
        .addComponent(renderer)
        .addComponent(playerCollider)
})()

obstacle
    .addComponent(obstaclePosition)
    .addComponent(obstacleRenderer)
    .addComponent(obstacleCollider)

const entities: Entity[] = [player, obstacle]

const update = (delta: number) => {
    entities.forEach((e) => {
        e.update(delta);
    })
}

const render = () => {
    canvas.clear();

    entities.forEach((e) => {
        e.render(ctx)
    })

    collisionSystem.update()
}

const loop = new GameLoop(update, render)
loop.start()