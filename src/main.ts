import { Canvas } from "./core/Canvas";
import { GameLoop } from "./core/GameLoop";
// import { Entity } from "./entities";

import { SceneManager } from "./scenes/SceneManager";
import { GameScene } from "./scenes/GameScene";

// import { PositionComponent } from "./entities/components/PositionComponent";
// import { VelocityComponent } from "./entities/components/VelocityComponent";
// import { KeyboardInputComponent } from "./entities/components/KeyboardInputComponent";
// import { ColliderComponent } from "./entities/components/ColliderComponent";
// import { SpriteRenderComponent } from "./entities/components/SpriteRenderComponent";

// import { CollisionSystem } from "./systems/CollisionSystem";

import { AssetLoader } from "./assets/AssetLoader";

const canvas = new Canvas(800, 600)
const ctx = canvas.getContext();
const sceneManager = new SceneManager()

// const collisionSystem = new CollisionSystem()

// const player = new Entity()
// const position = new PositionComponent(100, 100)
// const velocity = new VelocityComponent(position)
// const input = new KeyboardInputComponent(velocity)

// const playerCollider = new ColliderComponent(position, 50, 50)
// collisionSystem.addCollider(playerCollider);

// (async () => {
//     const playerImage = await AssetLoader.loadImage("./tests/character_test_image.png")

//     const renderer = new SpriteRenderComponent(position, playerImage, 50, 50)

//     player
//         .addComponent(position)
//         .addComponent(velocity)
//         .addComponent(input)
//         .addComponent(renderer)
//         .addComponent(playerCollider)
// })()

const update = (delta: number) => {
    sceneManager.update(delta)
}

const render = () => {
    canvas.clear();

    sceneManager.render(ctx)

    // collisionSystem.update()
};

(async () => {
    const playerSpriteSheet = await AssetLoader.loadImage("./tests/test-sprite-sheet.jpg")
    const gameScene = new GameScene(playerSpriteSheet)

    sceneManager.changeScene(gameScene)
})()

const loop = new GameLoop(update, render)
loop.start()