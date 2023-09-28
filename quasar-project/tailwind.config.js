/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            colors: {
                "amarelo-claro": "#F2CB57",
                "amarelo-escuro": "#F2BE5C",
                vermelho: "#d91a1a",
                branco: "#F2F2F2",
                preto: "#0d0d0d",
                azul: "#9fb9c6",
                "azul-claro": "#a0b9c6",
                cinza: "#384145",
                "azul-escuro": "#222b30",
                "cinza-escuro": "#161616",
            },
            fontFamily: {
                sora: ['"Sora","sans-serif"'],
            },
        },
    },
    plugins: [],
};