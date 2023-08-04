## Vue Instance Properties

Although there are many properties/keys that can be defined in the Vue instance, the following provides some of the most important ones that need to be understood to get started:

-   **el**: This property specifies the element to which the Vue instance is bound. It is used to identify the root element of the Vue application.

-   **template**: The `template` property defines the markup that will be rendered as the Vue component. It contains the HTML code with Vue directives and expressions.

-   **data**: The `data` property is used to define the data that will be used in the Vue instance. It is an object that stores the application's data and acts as the model for the view.

-   **methods**: The `methods` property contains the functions that can be called from the Vue instance. These functions can be used to perform actions and manipulate data in response to user interactions.

These properties are fundamental to building Vue applications, and understanding them will provide a strong foundation for working with Vue.js.

---

## Mounting Vue Instance

There are multiple syntaxes to mount a Vue instance. They might be different in syntax but perform everything in a similar fashion. In this lesson, the two most common ways to mount the Vue instance are discussed:

1. `el: '#app'` as a property in the Vue instance.
2. Calling `$mount('#app')` on the Vue instance.

**Difference:**

If a Vue instance is mounted using both of the methods provided above, the result will be exactly the same. The question that arises is:

Why are there two methods for doing the exact same thing?

The second method (`$mount('#app')`) allows us to defer the mounting of the instance until a specific event occurs or when we need it! For example, the second method will allow deferring when a particular element exists on a webpage or when an async process has finished.

This flexibility can be advantageous in certain scenarios and provides more control over when and how the Vue instance is mounted.
