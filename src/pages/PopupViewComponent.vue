<template>
  <div class="popup">
    <div class="flex">
      <router-link to="/popup/add" class="button button--primary">
        Add Popup</router-link
      >
      <router-link :to="`/popup/${id}/edit`" class="button button--secondary"
        >Edit Popup</router-link
      >
      <button class="button--danger" @click="deletePopup">Delete Popup</button>
    </div>

    <div class="content">
      <div class="details" v-if="popup">
        <div class="wrapper">
          <div class="label">Name</div>
          <div class="value">
            {{ popup.name }}
          </div>
        </div>
        <div class="wrapper">
          <div class="label">Date Created</div>
          <div class="value">
            Created on {{ popup.created_at | formatDate }}
          </div>
        </div>

        <div class="wrapper">
          <div class="label">How to use</div>
          <div class="value">
            Copy the following script and paste it at the before the closing
            body tag of your code.
            <div class="code-wrapper">
              <code v-text="`<script `"></code>
              <code v-text="referenceScript"> </code>
              <code v-text="`script>`"></code>
            </div>
          </div>
        </div>
      </div>
      <TemplateViewer :popupData="popup" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateViewer from "@/components/TemplateViewer.vue";
import { PopupService } from "@/services";

export default {
  components: {
    TemplateViewer,
  },
  computed: {
    ...mapGetters({
      popups: "global/getPopups",
    }),
    popup() {
      if (!this.popups || !this.popups.length) return null;
      const data = this.popups.find((popup) => popup.id == parseInt(this.id));
      if (!data) return null;

      const formattedData = {
        id: data.id,
        name: data.name,
        stars: {
          top: data.stars.top,
          left: data.stars.left,
        },
        mainText: {
          content: data["main_text"].content,
          top: data["main_text"].top,
          left: data["main_text"].left,
        },
        email: {
          content: data.email.content,
          top: data.email.top,
          left: data.email.left,
        },
        button: {
          content: data.button.content,
          top: data.button.top,
          left: data.button.left,
        },
        supportingText: {
          content: data["supporting_text"].content,
          top: data["supporting_text"].top,
          left: data["supporting_text"].left,
        },
        popup: {
          "background-color": data.background_color,
        },
      };
      return formattedData;
    },
    referenceScript() {
      return ` src="https://premio-backend.herokuapp.com/pop-up/${this.id}" defer></`;
    },
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async deletePopup() {
      // Delete Popup from server
      this.$store.commit("global/updateLoadingStatus", true);
      await new PopupService(this).deletePopup(this.id);

      // Refresh popups in store
      await this.$store.dispatch("global/getPopups");
      this.$store.commit("global/updateLoadingStatus", false);
      this.$router.push("/home");
    },
  },
  async mounted() {
    if (!this.popups) this.$router.push("/home");
    this.id = this.$route.params.id;
    this.$store.commit("title/updateTitle", this.popup.name);
  },
};
</script>

<style></style>
