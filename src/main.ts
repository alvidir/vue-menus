import ContextMenu from "./ContextMenu.vue";

const CONTEXT_MENU_TAG = "context-menu";
export default {
  ContextMenu,
};

export function include(app: any): any {
  app.component(CONTEXT_MENU_TAG, ContextMenu);
}
