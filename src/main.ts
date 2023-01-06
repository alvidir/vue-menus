import { App } from "vue";
import RegularMenu from "./RegularMenu.vue";
import ContextMenu from "./ContextMenu.vue";

const REGULAR_MENU_TAG = "regular-menu";
const CONTEXT_MENU_TAG = "context-menu";

function include(app: App): App {
  return app
    .component(REGULAR_MENU_TAG, RegularMenu)
    .component(CONTEXT_MENU_TAG, ContextMenu);
}

export default include;
export { RegularMenu, ContextMenu };
