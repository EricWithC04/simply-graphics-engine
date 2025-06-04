import { Canvas } from "./core/Canvas";
import { GameLoop } from "./core/GameLoop";
import { Entity } from "./entities";
import { PositionComponent } from "./entities/components/PositionComponent";
import { RenderRectComponent } from "./entities/components/RenderRectComponent";

const canvas = new Canvas(800, 600)
const ctx = canvas.getContext();

const player = new Entity()
const position = new PositionComponent(100, 100)
const renderer = new RenderRectComponent(position, 50, 50, "red")

player
    .addComponent(position)
    .addComponent(renderer)

const update = (delta: number) => {
    position.update(delta);
}

const render = () => {
    canvas.clear();

    player.render(ctx);
}

const loop = new GameLoop(update, render)
loop.start()