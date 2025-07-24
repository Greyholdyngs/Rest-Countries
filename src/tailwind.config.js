import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {}
    },
    Plugin: []
}