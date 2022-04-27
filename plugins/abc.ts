export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (from, to) => {
        console.log(from);
    }, { global: true })

    addRouteMiddleware('named-test', () => {
        console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
    })
})
