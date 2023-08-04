// Create the vue instance but it is not mounted immidiately
const myVueInstance = new Vue({
    template:
        "<div>I'm Vue template and I was mounted after two seconds!</div>",
});

// Let's assume there is some async task that happened and now we can mount our instance!
setTimeout(() => {
    myVueInstance.$mount("#app"); //mounting the Vue instance
}, 2000);
