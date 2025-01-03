/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "mirage-dark": "#222222",
                "smokey-gray": "#737376",
                "ghost-white": "#F5F9FC",
                "light-gray": "#D1E0E9",
                "neutral": "#D4D4D4",
            }
        },
    },
    plugins: [],
}