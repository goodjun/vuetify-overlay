# Vuetify Overlay

> Inspired by https://github.com/eolant/vuetify-toast-snackbar

<p>
<a href="https://www.npmjs.com/package/vuetify-overlay"><img src="https://img.shields.io/npm/v/vuetify-overlay.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuetify-overlay"><img src="https://img.shields.io/npm/l/vuetify-overlay.svg?sanitize=true" alt="License"></a>
<a href="https://npmcharts.com/compare/vuetify-overlay?minimal=true"><img src="https://img.shields.io/npm/dm/vuetify-overlay.svg?sanitize=true" alt="Downloads"></a>
</p>

### Install

```bash
npm install vuetify-overlay --save
```

### How to use

Include plugin in your `src/plugins/vuetify.ts` file.

```javascript
import VuetifyOverlay from "vuetify-overlay";

Vue.use(VuetifyOverlay);
```

### How to call

```javascript
// Open overlay
this.$overlay(true);

// Close overlay
this.$overlay(false);
```
