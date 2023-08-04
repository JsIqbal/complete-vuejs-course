new Vue({
    el: "#app",
    template: `<div>
      <h1>Vue.js Application</h1>
      <p> {{name}}'s age is {{age}}</p>
      <button @click="incrementAge">Increment Age</button>
       <button @click="decrementAge">Decrement Age</button>
    </div>
    `,
    data: {
        name: "John",
        age: 26,
    },
    methods: {
        incrementAge() {
            this.age++;
        },
        decrementAge() {
            this.age--;
        },
    },
});
