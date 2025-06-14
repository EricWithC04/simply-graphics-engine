import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: '2DSimplyEngine',
            fileName: (format) => `my-2d-engine.${format}.js`,
        },
        rollupOptions: {
            output: {
                globals: {
                    // Nothing
                },
            },
        },
    },
});
