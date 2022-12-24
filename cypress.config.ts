import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            this.baseUrl = "http://localhost:3000";
        },
    },
});
