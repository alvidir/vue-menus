<template>
  <regular-card
    v-if="active"
    v-click-outside="onClickOutside"
    class="context-menu"
  >
    <slot></slot>
  </regular-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContextMenu",

  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
  },

  watch: {
    toggle() {
      this.updatePosition();
      this.active = true;
    },
  },

  data() {
    return {
      active: false,
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
    onClickOutside() {
      this.active = false;
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
<style scoped lang="scss">
@import "fibonacci-styles";

.context-menu {
  @extend .shadow-box;

  position: absolute;
  height: fit-content;
  min-width: $fib-12 * 1px;
  left: v-bind(left);
  top: v-bind(top);
  z-index: 1;
}
</style>
