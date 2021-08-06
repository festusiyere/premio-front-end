<template>
  <div>
    <h5>Instructions</h5>
    <div>
      <p>
        This is an application that is used to create a popup that can be
        integrated into a third party site. Basically, once you create a pop up,
        copy the generated script and place before the closing body of your
        website :)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('title/updateTitle', 'Instructions');
  },
};
</script>

<style></style>
