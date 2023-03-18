<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  watch,
  ref,
  onMounted,
  onUnmounted,
} from "vue";

interface Props {
  active?: boolean;
}

const props = defineProps<Props>();

interface Events {
  (e: "close", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const left = ref(0);
const top = ref(0);

watch(
  () => props.active,
  (active) => {
    if (active) {
      left.value = mousePosition.pageX;
      top.value = mousePosition.pageY;
    }
  }
);

interface MousePosition {
  pageX: number;
  pageY: number;
}

let mousePosition: MousePosition = {
  pageX: 0,
  pageY: 0,
};

const onMousemoveEvent = (event: MouseEvent) => {
  mousePosition = event;
};

onMounted(() => {
  document.addEventListener("mousemove", onMousemoveEvent);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onMousemoveEvent);
});
</script>

<template>
  <regular-menu
    v-if="active"
    class="context-menu"
    v-click-outside="(event: MouseEvent) => emit('close', event)"
  >
    <slot></slot>
  </regular-menu>
</template>

<style lang="scss">
.context-menu {
  position: absolute !important;
  left: v-bind(left);
  top: v-bind(top);
}
</style>
