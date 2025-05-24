type UpdateFn = (delta: number) => void
type RenderFn = () => void

export class GameLoop {
    private lastTime = 0;

    constructor (private update: UpdateFn, private render: RenderFn) {}

    start(): void {
        const loop = (time: number) => {
            const delta = (time - this.lastTime) / 1000;
            this.lastTime = time

            this.update(delta)
            this.render()

            requestAnimationFrame(loop)
        }
        
        requestAnimationFrame(loop)
    }
}
