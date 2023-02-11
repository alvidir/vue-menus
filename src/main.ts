import { App } from "vue";
import RegularMenu from "./RegularMenu.vue";
import ContextMenu from "./ContextMenu.vue";
import SidenavMenu from "./SidenavMenu.vue";

const REGULAR_MENU_TAG = "regular-menu";
const CONTEXT_MENU_TAG = "context-menu";
const SIDENAV_MENU_TAG = "sidenav-menu";

function include(app: App): App {
  return app
    .component(REGULAR_MENU_TAG, RegularMenu)
    .component(CONTEXT_MENU_TAG, ContextMenu)
    .component(SIDENAV_MENU_TAG, SidenavMenu);
}

export default include;
export { RegularMenu, ContextMenu };
