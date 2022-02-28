const loadingDirective = {
    mounted(el, binding) {
        console.log('el', el);
        console.log('binding', binding);
    }
};

export default loadingDirective;