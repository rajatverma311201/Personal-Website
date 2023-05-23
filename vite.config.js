import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
            },
            output: {
                manualChunks: undefined,
            },
            manualChunks(id) {
                if (id.includes("_redirects")) {
                    return "ignored";
                }
            },
        },
    },
});
