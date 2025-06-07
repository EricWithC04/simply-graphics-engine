import { SpriteSheet } from "./SpriteSheet";

export class Animation {
    public elapsedTime: number = 0
    public currentFrameIndex: number = 0

    constructor (
        public spriteSheet: SpriteSheet,
        public frameIndices: number[],
        public frameDuration: number,
        public loop: boolean = true
    ) {}

    update(deltaTime: number) {
        this.elapsedTime += deltaTime

        if (this.elapsedTime >= this.frameDuration) {
            this.elapsedTime = 0
            this.currentFrameIndex++
            if (this.currentFrameIndex >= this.frameIndices.length) {
                this.currentFrameIndex = this.loop ? 0 : this.frameIndices.length - 1
            }
        }
    }

    getCurrentFrame() {
        const frameIndex = this.frameIndices[this.currentFrameIndex]
        return this.spriteSheet.getFrame(frameIndex)
    }
}