import {  defineConfig } from "vite";

export default defineConfig ({
    root: "index",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})