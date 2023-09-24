/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                lightGrayishViolet: "var(--lightGrayishViolet)",
                wowViolet: "var(--wowViolet)",
                veryDarkViolet: "var(--veryDarkViolet)",
                primaryOne: "var(--primaryOne)",
                primaryTwo: "var(--primaryTwo)",
                redError: "var(--redError)"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            }
        }
    },
    plugins: []
};
