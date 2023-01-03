import { App } from "vue";
import ContextMenu from "./ContextMenu.vue";
import { include as includeDirectives } from "vue-directives/src/main";

const CONTEXT_MENU_TAG = "context-menu";

function include(app: App): App {
  return includeDirectives(app).component(CONTEXT_MENU_TAG, ContextMenu);
}

export default include;
export { ContextMenu };
