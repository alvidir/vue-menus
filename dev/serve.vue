<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div id="app">
    <div class="demo-set light">
      <dock-menu position="horizontal">
        <button>
          <label>I am a tooltip</label>
          hello world
        </button>
        <button>hello world</button>
        <span></span>
        <button>hello world</button>
      </dock-menu>
      <dock-menu>
        <button>
          <label>I am a tooltip</label>
          hello world
        </button>
        <button>hello world</button>
        <span></span>
        <button>hello world</button>
      </dock-menu>
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
    <div class="demo-set dark">
      <dock-menu
        ><button>hello world</button>
        <button>hello world</button>
        <span></span>
        <button>hello world</button>
      </dock-menu>
      <div
        class="demo-subset bg-secondary"
        @mouseup.right="activateContextMenu(3)"
        @contextmenu.prevent
      >
        <context-menu :active="contextMenus[3]" @close="hideContextMenu(3)">
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
        @mouseup.right="activateContextMenu(4)"
        @contextmenu.prevent
      >
        <context-menu :active="contextMenus[4]" @close="hideContextMenu(4)">
          <button>An option</button>
          <button>Another option</button>
        </context-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServeDev",
  data() {
    return {
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
