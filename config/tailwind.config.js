module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ['Roboto', 'sans-serif'],
            },
            keyframes: {
                iconRotate: {
                    from: {
                        '-webkit-transform': 'rotate(0)',
                        transform: 'rotate(0)'
                    },
                    to: {
                        '-webkit-transform': 'rotate(180deg)',
                        transform: 'rotate(180deg)'
                    },
                },
                iconReverseRotate: {
                    from: {
                        '-webkit-transform': 'rotate(180deg)',
                        transform: 'rotate(180deg)'
                    },
                    to: {
                        '-webkit-transform': 'rotate(0)',
                        transform: 'rotate(0)'
                    },
                }
            },
            animation: {
                iconRotate: 'iconRotate 0.3s ease-in-out forwards',
                iconReverseRotate: 'iconReverseRotate 0.3s ease-in-out'
            }
        },
    },
    plugins: [],
}
