import Vue, { PluginFunction } from "vue";

declare const VuetifyOverlayPlugin: VuetifyOverlayPlugin;
export default VuetifyOverlayPlugin;

export interface VuetifyOverlayPlugin {
  install: PluginFunction<any>;
}

interface VuetifyOverlayMethods {
  (value: boolean): void;
}

declare module "vue/types/vue" {
  interface Vue {
    $overlay: VuetifyOverlayMethods;
  }
}
