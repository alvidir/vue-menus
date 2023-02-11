<template>
  <sidenav-menu position="horizontal" :expanded="expanded">
    <button class="no-hover no-tooltip" @click="switchExpanded">
      <img
        class="large"
        src="https://raw.githubusercontent.com/alvidir/statics/main/pictures/svg/alvidir_logo.svg"
        alt=""
      />
      <label>This tooltip is never shown</label>
      <span><h2>Alvidir</h2></span>
    </button>
    <button :class="{ active: active[0] }" @click="onClick(0)">
      <i class="bx bx-search-alt"></i>
      <label>Search</label>
      <span>Search...</span>
    </button>
    <button :class="{ active: active[1] }" @click="onClick(1)">
      <i class="bx bx-cabinet"></i>
      <label>Projects</label>
      <span>Projects</span>
    </button>
    <button :class="{ active: active[2] }" @click="onClick(2)">
      <i class="bx bx-user-pin"></i>
      <label>Characters</label>
      <span>Characters</span>
    </button>
    <button :class="{ active: active[3] }" @click="onClick(3)">
      <i class="bx bxs-castle"></i>
      <label>Locations</label>
      <span>Locations</span>
    </button>
    <button :class="{ active: active[4] }" @click="onClick(4)">
      <i class="bx bx-calendar-event"></i>
      <label>Events</label>
      <span>Events</span>
    </button>
    <span class="flex"></span>
    <button>
      <img
        class="fitted larger"
        src="https://assets.rawpixel.com/cover_png_400/Y29sbGVjdGlvbi9jb3Zlci9zY3JlZW5fc2hvdF8yMDE3LTA5LTE0X2F0XzMuMTQuMTBfcG0ucG5n.png?s=GkJuAnvHugH9-RJK6N_Y0MbIdONQw8fHcH4IS33-n_E"
        alt=""
      />
      <div>
        <span>Username</span>
        <small>Something interesting</small>
      </div>
    </button>
  </sidenav-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DemoSidenav",
  data() {
    return {
      expanded: false,
      flex: false,
      active: [false, false, false, false, false],
    };
  },

  methods: {
    onClick(index: number) {
      this.active = [false, false, false, false, false];
      this.active[index] = true;
    },

    switchExpanded() {
      this.expanded = !this.expanded;
    },
  },
});
</script>

<style lang="scss">
@import "fibonacci-styles";
</style>
