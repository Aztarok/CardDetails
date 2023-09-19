/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'lightGrayishViolet': 'hsl(270, 3%, 87%)',
                'wowViolet': 'hsl(279, 6%, 55%)',
                'veryDarkViolet': 'hsl(278, 68%, 11%)',
                'primaryOne': 'hsl(249, 99%, 64%)',
                'primaryTwo': 'hsl(278, 94%, 30%)',
                'redError': 'hsl(0, 100%, 66%)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
