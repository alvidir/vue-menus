<template>
  <regular-card
    v-if="active"
    v-click-outside="onClickOutside"
    class="context-menu"
  >
    <div class="options">
      <slot></slot>
    </div>
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
<style lang="scss">
@import "fibonacci-styles";

.context-menu {
  @extend .shadow-box;

  position: absolute !important;
  height: fit-content;
  min-width: $fib-12 * 1px;
  left: v-bind(left);
  top: v-bind(top);
  z-index: 1;

  .card-body {
    padding: 0px !important;
  }

  .options {
    display: flex;
    flex-direction: column;

    .danger {
      color: var(--color-red);
    }

    span {
      color: var(--color-text-secondary);
      font-size: small;
      font-weight: 800;
      padding: $fib-6 * 1px;

      &:not(:first-child) {
        border-top: 1px solid var(--color-border);

        &.danger {
          border-color: var(--color-red);
        }
      }
    }

    button {
      @extend .round-corners, .fib-4;

      text-align: start;
      box-sizing: border-box !important;
      background: transparent;
      border: none;
      margin: $fib-3 * 1px;
      padding: $fib-6 * 1px;
      color: var(--color-text-primary);

      &:not(.danger):hover {
        background: var(--color-button-hover);
      }

      &.danger:hover {
        outline: 1px solid var(--color-red);
      }
    }
  }
}
</style>
