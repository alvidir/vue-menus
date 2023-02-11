<template>
  <div class="sidenav-menu">
    <regular-menu :active="active" :class="{ flex: flex, expanded: expanded }">
      <slot></slot>
    </regular-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import RegularMenu from "./RegularMenu.vue";

export default defineComponent({
  name: "SidenavMenu",
  components: {
    RegularMenu,
  },
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    expanded: {
      type: Boolean,
      default: false,
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
.sidenav-menu {
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

  .regular-menu {
    @extend .round-corners, .fib-6;

    min-width: fit-content;
    min-height: fit-content;

    &.flex {
      height: 100%;
    }

    &.expanded {
      width: $fib-12 * 1px;

      .options {
        width: 100% !important;

        button {
          width: $fib-12 * 1px - $fib-5 * 1px !important;
        }

        label {
          visibility: hidden !important;
        }
      }
    }

    .options {
      width: fit-content;
      height: 100%;
      overflow: hidden;

      button {
        @extend .round-corners, .fib-5;

        height: $fib-9 * 1px;
        min-height: $fib-9 * 1px;
        width: $fib-9 * 1px;
        white-space: nowrap;

        &.active {
          //   background: #323232;
        }

        span,
        div {
          border: none;
          padding: 0px;
          padding-left: $fib-6 * 1px;
        }
      }

      span {
        &.flex {
          margin-top: auto;
        }
      }

      label {
        position: absolute;
        white-space: nowrap;
        background-color: var(--color-bg-primary);
        padding: $fib-5 * 1px $fib-6 * 1px;
        margin: $fib-3 * 1px;
        border-radius: $fib-5 * 1px;
        border: 1px solid var(--color-border);
        left: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin-left: $fib-6 * 1px;

        span {
          padding: 0px;
          width: fit-content;
        }
      }

      *:not(:hover),
      *.no-tooltip {
        label {
          visibility: hidden;
        }
      }

      *.large {
        scale: $fib-6 * 0.1;
      }

      *.larger {
        scale: $fib-11 * 0.01;
      }

      *.fitted {
        @extend .round-corners, .fib-4;

        height: 100%;
        // width: 100%;
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
