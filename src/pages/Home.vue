<template>
  <div>
    <Navbar />
    <h1>Home</h1>
    <router-link to="about"><a>About</a></router-link>
    <b-button @click="increase">increase</b-button>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  },
  methods: {
    increase () {
      this.$store.state.counter += 1
    }
  }
}
</script>
