import type { IScene } from "./IScene";

export class SceneManager {
    private currentScene: IScene | null = null;

    changeScene(scene: IScene) {
        this.currentScene = scene
    }

    update(dt: number) {
        this.currentScene?.update(dt)
    }

    render(ctx: CanvasRenderingContext2D) {
        this.currentScene?.render(ctx)
    }
}