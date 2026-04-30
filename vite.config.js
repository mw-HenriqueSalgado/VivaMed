import { resolve } from "path";
import { defineConfig, createLogger } from "vite";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";

function createThemeConfig({ entryScss, outDir, cssFileName }) {
    const logger = createLogger();
    const originalWarn = logger.warn;

    logger.warn = (msg, options) => {
        if (
            msg.includes("didn't resolve at build time") &&
            (msg.includes(".woff") ||
                msg.includes(".woff2") ||
                msg.includes(".ttf") ||
                msg.includes(".otf"))
        ) {
            return;
        }
        originalWarn(msg, options);
    };

    return defineConfig({
        customLogger: logger,
        root: "./",

        // Explicit: copy /public to dist root (fonts/icons/etc.)
        publicDir: "public",

        build: {
            // Output root
            outDir,
            emptyOutDir: true,
            minify: false,
            sourcemap: false,

            lib: {
                entry: resolve(__dirname, entryScss),
                name: "Theme",
                cssFileName, // produces ClientName_Theme.css
            },

            rollupOptions: {
                output: {
                    // JS is not used; keep it ignorable
                    entryFileNames: "ignore.[hash].js",
                    chunkFileNames: "ignore-chunk.[hash].js",

                    // Put CSS in /css, everything else in /assets
                    assetFileNames: (assetInfo) => {
                        const name = assetInfo.name || "";
                        if (name.endsWith(".css")) return "css/[name][extname]";
                        return "assets/[name][extname]";
                    },
                },
            },
        },

        css: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    sortMediaQueries({ sort: "desktop-first" }),
                ],
            },
            preprocessorOptions: {
                scss: {
                    includePaths: [resolve(__dirname, "2-src/scss")],
                },
            },
        },
    });
}

export default createThemeConfig({
    entryScss: "2-src/scss/ClientName_Theme.scss",
    outDir: "1-dist",
    cssFileName: "ClientName_Theme",
});