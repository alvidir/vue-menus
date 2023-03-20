import { App } from "vue";
import RegularMenu from "./RegularMenu.vue";
import ContextMenu from "./ContextMenu.vue";
import ProfileMenu from "./ProfileMenu.vue";
import DockMenu from "./DockMenu.vue";

function include(app: App): App {
  return app
    .component("regular-menu", RegularMenu)
    .component("context-menu", ContextMenu)
    .component("profile-menu", ProfileMenu)
    .component("dock-menu", DockMenu);
}

export default include;
export { RegularMenu, ContextMenu, DockMenu };
