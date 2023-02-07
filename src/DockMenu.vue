<template>
  <div class="dock-menu" :class="position">
    <regular-menu :active="true">
      <slot></slot>
    </regular-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import RegularMenu from "./RegularMenu.vue";

export enum Position {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export default defineComponent({
  name: "DockMenu",
  components: {
    RegularMenu,
  },
  props: {
    position: {
      type: String as PropType<Position>,
      default: Position.VERTICAL,
    },
  },

  data() {
    return {};
  },

  computed: {},

  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dock-menu {
  @import "fibonacci-styles";

  $global-margin: $fib-4 * 1px;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .regular-menu {
    min-width: fit-content;

    .options {
      display: flex;

      button {
        height: $fib-9 * 1px;
        width: $fib-9 * 1px;
        aspect-ratio: 1/1 !important;
      }

      label {
        @extend .shadow-box;

        position: absolute;
        white-space: nowrap;
        background-color: var(--color-bg-primary);
        padding: $fib-4 * 1px $fib-5 * 1px;
        margin: $fib-3 * 1px;
        border-radius: $fib-5 * 1px;
        border: 1px solid var(--color-border);
      }

      *:not(:hover) {
        label {
          visibility: hidden;
        }
      }
    }
  }

  &.vertical {
    @extend .left;
  }

  &.horizontal {
    @extend .top;
  }

  &.left,
  &.right {
    height: 100%;
    width: fit-content;

    .regular-menu {
      .options {
        flex-direction: column;
        width: fit-content;
      }
    }
  }

  &.left {
    margin-left: $global-margin;

    .regular-menu .options label {
      left: 100%;
    }
  }

  &.right {
    margin-right: $global-margin;

    .regular-menu .options label {
      right: 100%;
    }
  }

  &.top,
  &.bottom {
    width: 100%;
    height: fit-content;

    .regular-menu .options {
      flex-direction: row;

      span {
        &:not(:first-child) {
          border-top: 0px !important;
          border-left: 1px solid var(--color-border);
        }
      }
    }
  }

  &.top {
    margin-top: $global-margin;

    .regular-menu .options label {
      top: 100%;
    }
  }

  &.bottom {
    margin-bottom: $global-margin;

    .regular-menu .options label {
      bottom: 100%;
    }
  }
}
</style>
