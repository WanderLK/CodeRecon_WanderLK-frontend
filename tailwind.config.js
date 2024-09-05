const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-select/dist/index.esm.js'
    ],
    theme: {
        screens: {
            'max-2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            'max-xl': { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            'max-lg': { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            'max-md': { max: '767px' },
            // => @media (max-width: 767px) { ... }

            'max-sm': { max: '639px' }
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            colors: {
                accent: '#E1A160',
                theme: '#192829',
                light: '#2C4546',
                'dark-accent': '#9F5E1E',
                'light-accent': '#9F5E1E10'
            },
            boxShadow: {
                custom: '1px 4px 8.7px 0px rgba(0, 0, 0, 0.29)'
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), nextui()]
};
