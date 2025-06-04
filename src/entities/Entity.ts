type Component = {
    update?: (delta: number) => void
    render?: (ctx: CanvasRenderingContext2D) => void
}

export class Entity {
    private components: Component[] = [];

    addComponent(component: Component): this {
        this.components.push(component);
        return this
    }

    update(delta: number): void {
        this.components.forEach(component => component.update?.(delta));
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.components.forEach(component => component.render?.(ctx));
    }
}