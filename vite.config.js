import {  defineConfig } from "vite";

export default defineConfig ({
    root: "essensliste.html",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})