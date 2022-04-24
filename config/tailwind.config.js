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
            colors: [
            ],
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
                },
                menuAnimation: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    }
                }
            },
            animation: {
                menuAnimation: 'menuAnimation 0.2s ease-in-out',
                iconRotate: 'iconRotate 0.3s ease-in-out forwards',
                iconReverseRotate: 'iconReverseRotate 0.3s ease-in-out',

            },


        },
    },
    plugins: [],
}
