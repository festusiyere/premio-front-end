<template>
  <div class="settings">
    <TemplateEditor :popupData="popupData" @contentChanged="updateValues" />

    <div class="fields" v-if="popupData">
      <form @submit.prevent="updatePopup">
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
import { mapGetters } from 'vuex';
import TemplateEditor from '@/components/TemplateEditor.vue';
import { PopupService } from '@/services';

export default {
  components: {
    TemplateEditor,
  },
  computed: {
    ...mapGetters({
      popups: 'global/getPopups',
    }),
    popup() {
      if (!this.popups || !this.popups.length) return null;
      const data = this.popups.find((popup) => popup.id == parseInt(this.id));
      if (!data) return null;

      const formattedData = {
        id: data.id,
        name: data.name,
        stars: {
          id: data.stars.id,
          top: data.stars.top,
          left: data.stars.left,
        },
        mainText: {
          id: data['main_text'].id,
          content: data['main_text'].content,
          top: data['main_text'].top,
          left: data['main_text'].left,
        },
        email: {
          id: data.email.id,
          content: data.email.content,
          top: data.email.top,
          left: data.email.left,
        },
        button: {
          id: data.button.id,
          content: data.button.content,
          top: data.button.top,
          left: data.button.left,
        },
        supportingText: {
          id: data['supporting_text'].id,
          content: data['supporting_text'].content,
          top: data['supporting_text'].top,
          left: data['supporting_text'].left,
        },
        popup: {
          'background-color': data.background_color,
        },
      };
      return formattedData;
    },
  },
  data() {
    return {
      popupData: null,
    };
  },
  methods: {
    updateValues(target, value) {
      this.popupData[target].content = value;
    },

    // Update Popup in server
    async updatePopup() {
      this.$store.commit('global/updateLoadingStatus', true);
      await new PopupService(this).updatePopup(this.popupData, this.id);
      await this.$store.dispatch('global/getPopups');
      this.$store.commit('global/updateLoadingStatus', false);
      this.$router.push('/home');
    },
  },
  async mounted() {
    if (!this.popups) this.$router.push('/home');
    this.id = this.$route.params.id;
    this.$store.commit('title/updateTitle', 'Update ' + this.popup.name ?? '');
    this.popupData = this.popup;
  },
};
</script>

<style></style>
