<template>
  <regular-menu class="context-menu" :active="active" v-click-outside="onClose">
    <div class="options">
      <slot></slot>
    </div>
  </regular-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularMenu from "./RegularMenu.vue";
import { ClickOutside } from "vue-directives/src/main";

export const CLOSE_EVENT_NAME = "close";

export default defineComponent({
  name: "ContextMenu",
  events: [CLOSE_EVENT_NAME],
  components: {
    RegularMenu,
  },
  directives: {
    ClickOutside,
  },
  props: {
    active: Boolean,
  },

  watch: {
    active() {
      if (this.active) this.updatePosition();
    },
  },

  data() {
    return {
      live: {
        mousePosX: 0,
        mousePosY: 0,
      },
      current: {
        mousePosX: 0,
        mousePosY: 0,
      },
    };
  },

  computed: {
    top(): string {
      return `${this.current.mousePosY}px`;
    },

    left(): string {
      return `${this.current.mousePosX}px`;
    },
  },

  methods: {
    onClose() {
      this.$emit(CLOSE_EVENT_NAME);
    },

    updatePosition() {
      this.current.mousePosX = this.live.mousePosX;
      this.current.mousePosY = this.live.mousePosY;
    },

    onMouseEvent(event: MouseEvent) {
      this.live.mousePosX = event.pageX;
      this.live.mousePosY = event.pageY;
    },
  },

  mounted() {
    document.addEventListener("mousemove", this.onMouseEvent);
  },

  unmounted() {
    document.removeEventListener("mousemove", this.onMouseEvent);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.context-menu {
  position: absolute !important;
  left: v-bind(left);
  top: v-bind(top);
}
</style>
