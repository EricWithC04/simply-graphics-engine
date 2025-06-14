import { Canvas } from "./core/Canvas";
import { GameLoop } from "./core/GameLoop";

import { SceneManager } from "./scenes/SceneManager";
import { GameScene } from "./scenes/GameScene";

import { FPSCounter } from "./tools/FPSCounter";

// import { AssetLoader } from "./assets/AssetLoader";

const canvas = new Canvas(800, 600)
const ctx = canvas.getContext();
const sceneManager = new SceneManager()
const fpsCounter = new FPSCounter()

const update = (delta: number) => {
    sceneManager.update(delta)
    fpsCounter.update()
}

const render = () => {
    canvas.clear();

    sceneManager.render(ctx)
    fpsCounter.render(ctx)
};

(async () => {
    const gameScene = new GameScene([])

    sceneManager.changeScene(gameScene)
})()

const loop = new GameLoop(update, render)
loop.start()