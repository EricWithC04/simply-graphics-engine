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

const player2 = new Entity()
const position2 = new PositionComponent(100, 300)
const renderer2 = new RenderRectComponent(position2, 50, 50, "blue")

player
    .addComponent(position)
    .addComponent(renderer)

player2
    .addComponent(position2)
    .addComponent(renderer2)

const entities: Entity[] = [player, player2]

const update = (delta: number) => {
    entities.forEach((e) => {
        e.update(delta);
    })
}

const render = () => {
    canvas.clear();

    player.render(ctx);
    player2.render(ctx)
}

const loop = new GameLoop(update, render)
loop.start()