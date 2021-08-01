<template>
  <div class="template-wrapper">
    <div
      v-if="popupData"
      class="template"
      :style="{ backgroundColor: popupData.popup['background-color'] }"
    >
      <div class="inner" ref="container">
        <div
          @mousedown="dragMouseDown($event, 'stars')"
          class="stars"
          ref="stars"
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
          ref="mainText"
          :style="{
            top: popupData.mainText.top + 'px',
            left: popupData.mainText.left + 'px',
          }"
          @mousedown="dragMouseDown($event, 'mainText')"
        >
          <div
            contenteditable="true"
            @input="changeContent($event, 'mainText')"
          >
            {{ popupData.mainText.content }}
          </div>
        </div>
        <div
          class="input-field"
          ref="email"
          @mousedown="dragMouseDown($event, 'email')"
          :style="{
            top: popupData.email.top + 'px',
            left: popupData.email.left + 'px',
          }"
        >
          <input type="text" :placeholder="popupData.email.content" />
        </div>
        <div
          class="button"
          :style="{
            top: popupData.button.top + 'px',
            left: popupData.button.left + 'px',
          }"
          ref="button"
          @mousedown="dragMouseDown($event, 'button')"
        >
          <button
            contenteditable="true"
            @input="changeContent($event, 'button')"
          >
            {{ popupData.button.content }}
          </button>
        </div>
        <div
          class="sub-text"
          contenteditable="true"
          @mousedown="dragMouseDown($event, 'supportingText')"
          ref="supportingText"
          @input="changeContent($event, 'supportingText')"
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
  data() {
    return {
      currentElement: null,
      positions: {
        clientX: 0,
        clientY: 0,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  methods: {
    changeContent(event, data) {
      this.$emit("contentChanged", data, event.target.innerText);
    },

    dragMouseDown(event, data) {
      event.preventDefault();
      this.currentElement = data;
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },

    elementDrag(event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;

      this.popupData[this.currentElement].top =
        this.$refs[this.currentElement].offsetTop - this.positions.movementY;

      this.popupData[this.currentElement].left =
        this.$refs[this.currentElement].offsetLeft - this.positions.movementX;
    },
    closeDragElement() {
      // Reset start and end positions
      this.positions.clientX = 0;
      this.positions.clientY = 0;
      this.positions.movementY = 0;
      this.positions.movementX = 0;
      this.currentElement = null;

      // Remove dom events
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
};
</script>

<style></style>
