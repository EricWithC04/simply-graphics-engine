export class AssetLoader {
    static loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.src = src
            img.onload = () => resolve(img)
            img.onerror = reject
        })
    }
}