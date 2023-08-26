<script setup lang="ts">
import { ref } from "vue";
import DemoSidenav from "./DemoSidenav.vue";

const showContextMenu = ref(false);
const darkThemeEnabled = ref(false);

const hideContextMenu = () => {
  showContextMenu.value = false;
};

const activateContextMenu = () => {
  showContextMenu.value = true;
};
</script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap"
    rel="stylesheet"
  />
  <div id="app">
    <div
      class="demo-set"
      :class="{ dark: darkThemeEnabled, light: !darkThemeEnabled }"
    >
      <demo-sidenav></demo-sidenav>
      <div
        class="demo-subset bg-secondary"
        @mouseup.right="activateContextMenu"
        @contextmenu.prevent
      >
        <context-menu :active="showContextMenu" @close="hideContextMenu">
          <span>Preferences</span>
          <button @click="darkThemeEnabled = !darkThemeEnabled">
            Switch theme
          </button>
          <span>Another section</span>
          <button>An option</button>
          <button>Another option</button>
          <span class="danger">Danger zone</span>
          <button class="danger">
            <i class="bx bxs-message-alt-error"></i>An option
          </button>
        </context-menu>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "fibonacci-styles";

* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: row;
  width: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-bg-secondary);
}

.demo-set {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  &.light {
    @extend .theme-light;
  }

  &.dark {
    @extend .theme-dark;
  }

  .demo-subset {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    &.bg-primary {
      background-color: var(--color-bg-primary) !important;
    }

    &.bg-secondary {
      background-color: var(--color-bg-secondary) !important;
    }
  }
}
</style>
