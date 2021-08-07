<template>
  <div class="settings">
    <TemplateEditor :popupData="popupData" @contentChanged="updateValues" />

    <div class="fields">
      <form @submit.prevent="savePopup">
        <div class="input-field__wrapper">
          <label for="popup_name">Popup Name</label>
          <input type="text" v-model="popupData.name" id="popup_name" />
        </div>

        <div class="input-field__wrapper">
          <label for="text_content">Main Text Content</label>
          <input
            type="text"
            v-model="popupData.mainText.content"
            id="text_content"
          />
        </div>

        <div class="input-field__wrapper">
          <label for="email">Email Placeholder</label>
          <input type="text" v-model="popupData.email.content" id="email" />
        </div>

        <div class="input-field__wrapper">
          <label for="button">Button Text</label>
          <input type="text" v-model="popupData.button.content" id="button" />
        </div>

        <div class="input-field__wrapper">
          <label for="sub_text">Supporting Text</label>
          <input
            type="text"
            v-model="popupData.supportingText.content"
            id="sub_text"
          />
        </div>

        <div class="input-field__wrapper">
          <label for="color">Popup Color</label>
          <input
            type="color"
            id="color"
            v-model="popupData.popup['background-color']"
          />
        </div>

        <div class="ctas">
          <router-link to="/home" class="button button--secondary"
            >Cancel</router-link
          >
          <button class="button--primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TemplateEditor from '@/components/TemplateEditor.vue';
import { PopupService } from '@/services';

export default {
  components: {
    TemplateEditor,
  },
  data() {
    return {
      popupData: {
        name: 'Custom Popup',
        stars: {
          top: 24,
          left: 124,
        },
        mainText: {
          content:
            'All text and element in this popup should be editable and draggable',
          top: 60,
          left: 32,
        },
        email: {
          content: 'Email',
          top: 166,
          left: 43,
        },
        button: {
          content: 'SIGNUP NOW',
          top: 226,
          left: 43,
        },
        supportingText: {
          content: 'No credit card required. No surprises',
          top: 288,
          left: 45,
        },
        popup: {
          'background-color': '#ff7c54',
        },
      },
    };
  },
  methods: {
    updateValues(target, value) {
      this.popupData.mainText.content = value;
    },

    async savePopup() {
      this.$store.commit('global/updateLoadingStatus', true);
      // Save popup to Server

      await new PopupService(this).createPopup(this.popupData);
      // Refresh popups in store

      await this.$store.dispatch('global/getPopups');
      this.$store.commit('global/updateLoadingStatus', false);

      // Redirect to home page
      this.$router.push('/home');
    },
  },
  async mounted() {
    this.$store.commit('title/updateTitle', 'Add Popup');
  },
};
</script>

<style></style>
