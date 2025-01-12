/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    gray: '#9CA3AF',
                    lightgray: '#F3F4F6',
                    green: '#059669',
                    lightgreen: '#D1FAE5',
                },
            },
        },
    },
    plugins: [],
}
