interface Component {
    update?: (delta: number) => void
    render?: (ctx: CanvasRenderingContext2D) => void
}

export class Entity {
    private components: Component[] = [];

    addComponent(component: Component): this {
        this.components.push(component);
        return this
    }

    getComponent<T extends Component>(componentClass: new (...args: any[]) => T): T | undefined {
        return this.components.find(c => c instanceof componentClass) as T;
    }

    update(delta: number): void {
        this.components.forEach(component => component.update?.(delta));
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.components.forEach(component => component.render?.(ctx));
    }
}