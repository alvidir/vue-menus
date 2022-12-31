import { App } from "vue";
import ContextMenu from "./ContextMenu.vue";
import { include as includeDirectives } from "vue-directives/src/main";
import { include as includeCards } from "vue-cards/src/main";

const CONTEXT_MENU_TAG = "context-menu";

function include(app: App): App {
  includeDirectives(app);
  includeCards(app);

  return app.component(CONTEXT_MENU_TAG, ContextMenu);
}

export default {
  ContextMenu,
};

export { include, CONTEXT_MENU_TAG };
