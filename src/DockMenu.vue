<template>
  <div class="dock-menu">
    <regular-menu :active="active" :class="{ flex: flex }">
      <slot></slot>
    </regular-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import RegularMenu from "./RegularMenu.vue";

export default defineComponent({
  name: "DockMenu",
  components: {
    RegularMenu,
  },
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    flex: {
      type: Boolean,
      default: false,
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

  position: absolute;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin-left: $fib-4 * 1px;
  padding-top: $fib-4 * 1px;
  padding-bottom: $fib-4 * 1px;

  & > .regular-menu {
    @extend .round-corners, .fib-6;

    min-width: fit-content;
    min-height: fit-content;

    &.flex {
      height: 100%;
    }

    & > .options {
      width: fit-content;
      height: 100%;

      & > span.dock {
        height: 100%;
        border: none;
      }

      & > button {
        @extend .round-corners, .fib-5;

        position: relative;
        height: $fib-9 * 1px;
        min-height: $fib-9 * 1px;
        width: $fib-9 * 1px;
        white-space: nowrap;

        .absolute {
          position: absolute;
          margin-left: $fib-5 * 1px;
          left: 100%;
        }

        .bottom {
          @extend .absolute;
          bottom: 0px !important;
        }

        .top {
          @extend .absolute;
          top: 0px !important;
        }

        & > label,
        & > .tooltip {
          @extend .shadow-box;
          @extend .absolute;

          white-space: nowrap;
          border-radius: $fib-5 * 1px;
          border: 1px solid var(--color-border);
          padding: $fib-5 * 1px $fib-6 * 1px;
        }

        &.active {
          background: var(--color-button-active);
          & > i {
            color: var(--color-white);
          }
        }

        & > label {
          background-color: var(--color-bg-primary);
        }

        & > img {
          &.logo {
            @extend .larger;

            margin-right: $fib-7 * 1px;
            height: 100%;
            aspect-ratio: 1/1;
          }

          &.larger {
            scale: $fib-6 * 0.1;
          }
        }
      }

      *:not(:hover),
      *.no-tooltip {
        label,
        .tooltip {
          visibility: hidden;

          &.delayed {
            transition-delay: $fib-5 * 0.01s;
            transition-property: visibility;
          }
        }
      }

      *.fitted {
        @extend .round-corners, .fib-4;

        height: 100%;
      }

      i,
      *.icon {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100%;
        aspect-ratio: 1/1;
        font-size: $fib-7 * 1px;
      }
    }
  }
}
</style>
