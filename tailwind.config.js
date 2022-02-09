module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#0083FC',
                'olive-green': '#C6FB55',
                gray: '#7d7d7d',
                'light-gray': '#F9F9F9',
            },
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            grotesque: ['Darker Grotesque', 'sans-serif'],
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
