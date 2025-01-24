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
                    bad: '#FEF2F2',
                    bad_hover: '#ffc9c9',
                    great: '#EFF6FF',
                    great_hover: '#bedbff',
                    good: '#F0FDF4',
                    good_hover: '#b9f8cf',
                    soso: '#FAF5FF',
                    soso_hover: '#e9d4ff',
                },
                awesome: {
                    DEFAULT: '#FEFCE8',
                    border: '#fef9c2',
                    hover: '#fef9c2',
                    'hover-border': '#fff085',
                },
                great: {
                    DEFAULT: '#eff6ff',
                    border: '#dbeafe',
                    hover: '#dbeafe',
                    'hover-border': '#bedbff',
                },
                good: {
                    DEFAULT: '#f0fdf4',
                    border: '#dcfce7',
                    hover: '#dcfce7',
                    'hover-border': '#b9f8cf',
                },
                soso: {
                    DEFAULT: '#faf5ff',
                    border: '#f3e8ff',
                    hover: '#f3e8ff',
                    'hover-border': '#e9d4ff',
                },
                bad: {
                    DEFAULT: '#fef2f2',
                    border: '#ffe2e2',
                    hover: '#ffe2e2',
                    'hover-border': '#ffc9c9',
                },
            },
        },
    },
    plugins: [],
}
