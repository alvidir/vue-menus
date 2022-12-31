<template>
  <regular-card id="right-click-menu" v-if="active">
    <div v-for="option in options" :key="option.id">{{ option.title }}</div>
  </regular-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface Option {
  id: string;
  title: string;
}

export default defineComponent({
  name: "ContextMenu",
  props: {
    active: Boolean,
    options: Object as PropType<Option[]>,
  },

  watch: {
    active() {
      this.updatePosition();
    },

    items() {
      this.updatePosition();
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
    updatePosition() {
      this.current.mousePosX = this.live.mousePosX;
      this.current.mousePosY = this.live.mousePosY;
    },

    onMouseEvent(event: any) {
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

#right-click-menu {
  @extend .shadow-box;

  position: absolute;
  height: fit-content;
  width: $fib-12 * 1px;
  left: v-bind(left);
  top: v-bind(top);
  z-index: 1;
}
</style>
