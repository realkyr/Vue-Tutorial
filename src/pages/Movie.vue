<template>
  <div>
    <h1>Movie</h1>
    <img :src="getMovie.photoURL" />
    {{ getMovie.title }}
  </div>
</template>

<script>
export default {
  computed: {
    getMovie () {
      return this.$store.state.movies[this.$route.params.id]
    }
  }
}
</script>
