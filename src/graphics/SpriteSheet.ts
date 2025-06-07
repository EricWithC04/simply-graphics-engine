export class SpriteSheet {
    constructor (
        public image: HTMLImageElement,
        public frameWidth: number,
        public frameHeight: number,
        public columns: number = Math.floor(image.width / frameWidth)
    ) {}

    getFrame(frameIndex: number): { sx: number; sy: number; sw: number; sh: number } {
        const sx = (frameIndex % this.columns) * this.frameWidth;
        const sy = Math.floor(frameIndex / this.columns) * this.frameHeight;
        return { sx, sy, sw: this.frameWidth, sh: this.frameHeight }
    }
}