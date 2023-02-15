<script>
export default {
  data() {
    return {
      title: "The last of us",
      author: "John cage",
      age: 0,
    };
  },

  methods: {
    increment() {
      this.age++;
    },
  },

  mounted() {
    console.log(`The guy's age is ${this.count}.`);
  },
};
</script>

<template>
  <p>{{ title }}-{{ author }}-{{ age }}</p>
  <button @click="increment">Lie</button>
</template>
