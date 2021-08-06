<template>
  <div class="home">
    <div class="d-flex space-between">
      <h5>Popup List</h5>
      <router-link to="/popup/add" class="button button--primary">
        Add Popup</router-link
      >
    </div>

    <div
      class="popup__list"
      :class="{ 'flex-start': popups && popups.length && popups.length < 3 }"
    >
      <template v-if="popups && popups.length">
        <div class="popup__list__item" v-for="popup in popups" :key="popup.id">
          <div
            class="thumb"
            :style="{ backgroundColor: popup.background_color }"
          >
            <div class="innerText">
              {{ popup.main_text.content }}
            </div>
          </div>
          <div class="details">
            <router-link
              :to="`/popup/${popup.id}`"
              class="button button--secondary"
              >View</router-link
            >
            <div class="name">{{ popup.name }}</div>
            <div class="date">
              Created on {{ popup.created_at | formatDate }}
            </div>
          </div>
        </div>
      </template>
      <template v-if="popups && !popups.length">
        <h4>No Popup Added Yet</h4>
      </template>
      <template v-if="!popups"> Loading... </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      popups: 'global/getPopups',
    }),
  },
  async mounted() {
    this.$store.commit('title/updateTitle', 'Home');
    this.$store.dispatch('global/getPopups');
  },
};
</script>

<style></style>
