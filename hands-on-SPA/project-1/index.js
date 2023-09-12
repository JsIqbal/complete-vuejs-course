new Vue({
    el: "#app",
    template: `<div>
      <h1> Vue.js Application </h1>
      <p> My name is {{getMyName()}}. See how my name is retrived using a function!</p>
    </div>
    `,
    data: {
        name: "John",
    },
    methods: {
        getMyName: function () {
            return this.name;
        },
    },
});
