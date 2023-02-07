import { App } from "vue";
import RegularMenu from "./RegularMenu.vue";
import ContextMenu from "./ContextMenu.vue";
import DockMenu from "./DockMenu.vue";

const REGULAR_MENU_TAG = "regular-menu";
const CONTEXT_MENU_TAG = "context-menu";
const DOCK_MENU_TAG = "dock-menu";

function include(app: App): App {
  return app
    .component(REGULAR_MENU_TAG, RegularMenu)
    .component(CONTEXT_MENU_TAG, ContextMenu)
    .component(DOCK_MENU_TAG, DockMenu);
}

export default include;
export { RegularMenu, ContextMenu };
