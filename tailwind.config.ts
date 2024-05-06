import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            animation: {
                aurora: 'aurora 60s linear infinite',
                meteor: 'meteor 5s linear infinite',
            },
            colors: {
                theme: {
                    DEFAULT: '#9290C3',
                    light: '#F9F9FF',
                    dark: '#292929',
                },
            },
            fontFamily: {
                logo: 'Dream-Avenue',
                nanum: 'NanumSquareNeo',
                cafe: 'Cafe24',
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: '50% 50%, 50% 50%',
                    },
                    to: {
                        backgroundPosition: '350% 50%, 350% 50%',
                    },
                },
                meteor: {
                    '0%': {
                        transform: 'rotate(215deg) translateX(0)',
                        opacity: '1',
                    },
                    '70%': { opacity: '1' },
                    '100%': {
                        transform: 'rotate(215deg) translateX(-1200px)',
                        opacity: '0',
                    },
                },
            },
            screens: { xs: '480px' },
        },
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars,
    });
}
