import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify("https://jndholttixfglbgntelg.supabase.co"),
    'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuZGhvbHR0aXhmZ2xiZ250ZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MjEyNjgsImV4cCI6MjA4NDA5NzI2OH0.895__RURSzaW1AGn8UrTcFTJwJcSZwclNuMmRNRLlcY"),
    'import.meta.env.VITE_SUPABASE_PROJECT_ID': JSON.stringify("jndholttixfglbgntelg"),
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
