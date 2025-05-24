export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor (width: number, height: number) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.appendChild(this.canvas)

        const context = this.canvas.getContext('2d');
        if (!context) throw new Error("No se ha podido obtener el contexto 2D")
        this.ctx = context;
    }

    getContext(): CanvasRenderingContext2D {
        return this.ctx
    }

    clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}