/**
 * custom directive
 */
export default defineNuxtPlugin(nuxtApp => {
    return nuxtApp.vueApp.directive('clickOutSide', {
        created: (element,binding) =>{
            element.clickOutsideEvent = function (event) {
                if (!(element === event.target || element.contains(event.target))) {
                   binding.value();
                }
            };
            document.body.addEventListener('click', element.clickOutsideEvent);
        },
        unmounted: (el) => {
            document.body.removeEventListener('click',el.clickOutsideEvent);
        }

    })
});
