<template>
  <div id="dock-menu" :class="{ active: active }">
    <regular-menu>
      <slot></slot>
    </regular-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  },

  data() {
    return {
      overflow: false,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#dock-menu {
  @import "fibonacci-styles";

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: fit-content;
  height: 100%;
  margin-left: $fib-4 * 1px;
  padding-top: $fib-4 * 1px;
  padding-bottom: $fib-4 * 1px;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &:not(:hover) > .regular-menu {
    min-width: fit-content;
  }

  &:hover > .regular-menu {
    min-width: 100vw;
  }

  & > .regular-menu {
    @extend .round-corners-fib-6;

    margin-top: auto;
    margin-bottom: auto;
    min-height: fit-content;
    // min-width: fit-content;
    background: none;
    border: none;

    & > .options {
      @extend .round-corners-fib-6;
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border);
      width: fit-content;

      & > button,
      & > .item {
        @extend .round-corners;

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
          background-color: var(--color-bg-primary);
          padding: $fib-5 * 1px $fib-6 * 1px;
        }

        &.active {
          background: var(--color-bg-highlight);
          & > i {
            color: var(--color-white);
          }
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
        @extend .round-corners-fib-4;

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
