<script setup lang="ts">
import { defineEmits, inject } from "vue";
import { SwitchButton } from "vue-buttons/src/main";

interface Profile {
  id: string;
  name: string;
  theme: Theme;
}

interface Events {
  (e: "signout", payload: MouseEvent): void;
  (e: "signup", payload: MouseEvent): void;
  (e: "edit", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

interface Theme {
  isDarkTheme: () => boolean;
  switchTheme: () => void;
}

const profile = inject<Profile>("profile");
</script>

<template>
  <regular-menu>
    <div class="header item no-hover">
      <div class="username">
        <small>Signed in as</small>
        <strong v-if="profile?.name">{{ profile.name }}</strong>
        <strong v-else-if="profile?.id">Unnamed user</strong>
        <strong v-else>Guest user</strong>
      </div>
      <i class="bx bxs-pencil" @click="emit('edit', $event)"></i>
    </div>
    <span>Appearance</span>
    <div class="option item no-hover">
      Dark theme
      <switch-button
        :checked="profile?.theme.isDarkTheme()"
        @switch="profile?.theme.switchTheme()"
      ></switch-button>
    </div>
    <span></span>
    <button v-if="profile?.id" @click="emit('signout', $event)">
      <i class="bx bx-log-out"></i>
      <span>Sign out</span>
    </button>
    <button v-else @click="emit('signup', $event)">
      <i class="bx bx-log-in"></i>
      <span>Create an account</span>
    </button>
  </regular-menu>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "fibonacci-styles";

.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between !important;

  & > i {
    color: var(--color-text-secondary);
    box-sizing: border-box;
    padding: $fib-6 * 1px;
  }

  &:not(:hover) i {
    pointer-events: none;
    transition: opacity $slower-fade;
    opacity: 0%;
  }
}

.username {
  display: flex;
  flex-direction: column;
  align-items: start !important;

  strong {
    margin-top: $fib-3 * 1px;
  }
}

.option {
  justify-content: space-between !important;
  color: var(--color-text-primary) !important;
  font-weight: 500 !important;
  font-size: smaller;
}
</style>
