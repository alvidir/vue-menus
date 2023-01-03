<template>
  <div v-if="active" class="regular-menu">
    <div class="options">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegularMenu",
  props: {
    active: Boolean,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "fibonacci-styles";

.regular-menu {
  @extend .shadow-box, .round-corners;

  height: fit-content;
  min-width: $fib-12 * 1px;
  box-sizing: border-box;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  z-index: 1;

  .options {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    &:not(:first-child) {
      border-top: 1px solid var(--color-border) !important;
    }

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

      display: flex;
      justify-content: start;
      align-items: center;
      box-sizing: border-box !important;
      background: transparent;
      border: none;
      margin: $fib-3 * 1px;
      padding: $fib-6 * 1px;
      color: var(--color-text-primary);

      &:hover {
        background: var(--color-button-hover);
      }

      i {
        font-size: large;

        &:first-child {
          margin-right: $fib-6 * 1px;
        }
      }
    }
  }
}
</style>
