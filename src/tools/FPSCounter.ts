export class FPSCounter {
    private frameCount = 0;
    private lastTime = performance.now();
    private fps = 0;

    update() {
        this.frameCount++;
        const now = performance.now();

        if (now - this.lastTime >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastTime = now;
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "black";
        ctx.font = "14px monospace";
        ctx.fillText(`FPS: ${this.fps}`, 10, 20)
    }
}