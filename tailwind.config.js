const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./resources/views/**/*.blade.php", "./resources/js/**/*.vue"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
