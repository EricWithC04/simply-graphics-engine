export interface IScene {
    update: (delta: number) => void
    render: (ctx: CanvasRenderingContext2D) => void
}