<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from "vue";
import { useMouse } from "./mouse";
import { ClickOutside as vClickOutside } from "vue-directives/src/main";

interface Props {
  active?: boolean;
}

const props = defineProps<Props>();

interface Events {
  (e: "close", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const { x, y } = useMouse();
const left = ref(x.value);
const top = ref(y.value);

watch(
  () => props.active,
  () => {
    left.value = x.value;
    top.value = y.value;
  }
);
</script>

<template>
  <h1>{{ x }} - {{ y }}</h1>
  <regular-menu
    v-show="active"
    class="context-menu"
    v-click-outside="(event: MouseEvent) => emit('close', event)"
  >
    <slot></slot>
  </regular-menu>
</template>

<style lang="scss">
@import "fibonacci-styles";

.context-menu {
  position: absolute !important;
  left: calc(v-bind(left) * 1px);
  top: calc(v-bind(top) * 1px);
}
</style>
