import { Canvas } from "./core/Canvas";
import { GameLoop } from "./core/GameLoop";

const canvas = new Canvas(800, 600)
const ctx = canvas.getContext();

let position = {
    x: 100,
    y: 100
}

const update = (delta: number) => {
    position.x += 10 * delta
}

const render = () => {
    canvas.clear();

    ctx.fillStyle= "red"
    ctx.fillRect(position.x, position.y, 50, 50)
}

const loop = new GameLoop(update, render)
loop.start()