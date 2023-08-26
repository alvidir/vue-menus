<script setup lang="ts">
import { ref, onMounted } from "vue";

const hideable = ref(false);
const focus = ref([false, false, false, false, false]);

const onIconClick = (index: number) => {
  focus.value = [false, false, false, false, false];
  focus.value[index] = true;
};

onMounted(() => {
  setTimeout(() => {
    hideable.value = true;
  }, 3000);
});
</script>

<template>
  <dock-menu :hideable="hideable">
    <button class="no-hover no-tooltip">
      <img
        class="logo"
        src="https://raw.githubusercontent.com/alvidir/statics/main/pictures/svg/alvidir_logo.svg"
        alt=""
      />
      <label>This tooltip is never shown</label>
    </button>
    <button :class="{ active: focus[0] }" @click="onIconClick(0)">
      <i class="bx bx-search-alt"></i>
      <label>Search...</label>
    </button>
    <button :class="{ active: focus[1] }" @click="onIconClick(1)">
      <i class="bx bx-cabinet"></i>
      <label>Projects</label>
    </button>
    <button :class="{ active: focus[2] }" @click="onIconClick(2)">
      <i class="bx bx-user-pin"></i>
      <label>Characters</label>
    </button>
    <button :class="{ active: focus[3] }" @click="onIconClick(3)">
      <i class="bx bxs-castle"></i>
      <label>Locations</label>
    </button>
    <button :class="{ active: focus[4] }" @click="onIconClick(4)">
      <i class="bx bx-calendar-event"></i>
      <label>Events</label>
    </button>
    <div class="item flex">
      <i class="bx bx-cog"></i>
      <regular-menu class="tooltip bottom" :active="true">
        <button>option 1</button>
        <button>option 2</button>
        <button>option 3</button>
      </regular-menu>
    </div>
    <span></span>
    <div class="item">
      <img
        class="fitted larger"
        src="https://assets.rawpixel.com/cover_png_400/Y29sbGVjdGlvbi9jb3Zlci9zY3JlZW5fc2hvdF8yMDE3LTA5LTE0X2F0XzMuMTQuMTBfcG0ucG5n.png?s=GkJuAnvHugH9-RJK6N_Y0MbIdONQw8fHcH4IS33-n_E"
        alt=""
      />
    </div>
  </dock-menu>
</template>

<style lang="scss">
@import "fibonacci-styles";
.column {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
}

.regular-menu.tooltip {
  padding: 0px !important;
}
</style>
