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
    <div class="demo-set theme-light">
      <demo-sidenav></demo-sidenav>
      <div
        class="demo-subset bg-secondary"
        @mouseup.right="activateContextMenu(1)"
        @contextmenu.prevent
      >
        <context-menu :active="contextMenus[1]" @close="hideContextMenu(1)">
          <span>First section</span>
          <button>An option</button>
          <button>Another option</button>
          <span class="danger">Danger zone</span>
          <button class="danger">
            <i class="bx bxs-message-alt-error"></i>An option
          </button>
        </context-menu>
      </div>
      <div
        class="demo-subset bg-primary"
        @mouseup.right="activateContextMenu(2)"
        @contextmenu.prevent
      >
        <context-menu :active="contextMenus[2]" @close="hideContextMenu(2)">
          <button>An option</button>
          <button>Another option</button>
        </context-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DemoSidenav from "./DemoSidenav.vue";

export default defineComponent({
  name: "ServeDev",
  components: { DemoSidenav },
  data() {
    return {
      expanded: false,
      flex: false,
      contextMenus: { 1: false, 2: false, 3: false, 4: false } as {
        [key: number]: boolean;
      },
    };
  },

  methods: {
    activateContextMenu(key: number) {
      this.contextMenus[key] = true;
    },

    hideContextMenu(key: number) {
      this.contextMenus[key] = false;
    },

    switchExpanded() {
      this.expanded = !this.expanded;
    },
  },
});
</script>

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
    flex-direction: column;
    width: 100%;
    height: 50%;

    &.bg-primary {
      background-color: var(--color-bg-primary) !important;
    }

    &.bg-secondary {
      background-color: var(--color-bg-secondary) !important;
    }
  }
}

.demo-item {
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
