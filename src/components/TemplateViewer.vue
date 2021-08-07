<template>
  <div class="template-wrapper">
    <div
      class="template"
      v-if="displayData"
      :style="{ backgroundColor: popupData.popup['background-color'] }"
    >
      <div class="inner" ref="container">
        <div
          class="stars"
          :style="{
            top: popupData.stars.top + 'px',
            left: popupData.stars.left + 'px',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
            />
          </svg>
        </div>
        <div
          class="main-text"
          :style="{
            top: popupData.mainText.top + 'px',
            left: popupData.mainText.left + 'px',
          }"
        >
          <div>
            {{ popupData.mainText.content }}
          </div>
        </div>
        <div
          class="input-field"
          :style="{
            top: popupData.email.top + 'px',
            left: popupData.email.left + 'px',
          }"
        >
          <input type="text" :placeholder="popupData.email.content" />
        </div>
        <div
          class="button-div"
          :style="{
            top: popupData.button.top + 'px',
            left: popupData.button.left + 'px',
          }"
        >
          <button>
            {{ popupData.button.content }}
          </button>
        </div>
        <div
          class="sub-text"
          ref="supportingText"
          :style="{
            top: popupData.supportingText.top + 'px',
            left: popupData.supportingText.left + 'px',
          }"
        >
          {{ popupData.supportingText.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popupData: {
      type: Object,
    },
  },
  watch: {
    popupData(val) {
      this.displayData = val;
    },
  },

  data() {
    return {
      displayData: null,
    };
  },
};
</script>

<style></style>
