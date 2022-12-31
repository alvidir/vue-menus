<template>
  <div id="app">
    <div class="demo-set light">
      <div class="demo-subset bg-secondary">
        <!-- DEMO ITEM -->
      </div>
      <div class="demo-subset bg-primary">
        <!-- DEMO ITEM -->
      </div>
    </div>
    <div class="demo-set dark">
      <div class="demo-subset bg-secondary">
        <!-- DEMO ITEM -->
      </div>
      <div class="demo-subset bg-primary">
        <!-- DEMO ITEM -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Option } from "../src/ContextMenu.vue";

export default defineComponent({
  name: "ServeDev",
  data() {
    return {
      rightClickMenuOptions: [] as Option[],
    };
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
