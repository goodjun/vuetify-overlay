import Overlay from "./Overlay.vue";

function init(Vue, globalOptions = {}) {
  const property = globalOptions.property || "$overlay";
  let el = null;

  function open() {
    if (!el) {
      const component = new Vue(Overlay);
      el = document.body.appendChild(component.$mount().$el);
      return true;
    }
    return false;
  }

  function close() {
    if (el) {
      document.body.removeChild(el);
      el = null;
      return true;
    }
    return false;
  }

  function overlay(value = true) {
    return value ? open() : close();
  }

  Vue.prototype[property] = Object.assign(overlay);
}

export default init;
