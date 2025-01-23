/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    darkgray: '#4B5563',
                    gray: '#9CA3AF',
                    lightgray: '#F3F4F6',
                    green: '#059669',
                    lightgreen: '#D1FAE5',
                    blue: '#2563EB',
                    lightblue: '#DBEAFE',
                    red: '#DC2626',
                    lightred: '#FEE2E2',
                    awesome: '#FEFCE8',
                    awesome_hover: '#FFF085',
                    great: '#EFF6FF',
                    great_hover: '#bedbff',
                    good: '#F0FDF4',
                    good_hover: '#b9f8cf',
                    soso: '#FAF5FF',
                    soso_hover: '#e9d4ff',
                    bad: '#FEF2F2',
                    bad_hover: '#ffc9c9',
                },
            },
        },
    },
    plugins: [],
}
