import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  define: {
    BUILD_DATE: JSON.stringify(
      new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
    ),
  },
});
