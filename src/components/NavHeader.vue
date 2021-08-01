<template>
  <header class="header">
    <nav class="top-nav">
      <div class="title">{{ title }}</div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    title() {
      // Get Title from store
      return this.$store.state.title.title;
    },
  },
};
</script>