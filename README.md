# Vuetify Overlay

> Inspired by https://github.com/eolant/vuetify-toast-snackbar

### Install

```bash
npm install vuetify-overlay --save
```

### How to use

Include plugin in your `src/plugins/vuetify.ts` file.

```javascript
import VuetifyOverlay from 'vuetify-overlay';

Vue.use(VuetifyOverlay);
```

### How to call

```javascript
// Open overlay
this.$overlay(true);

// Close overlay
this.$overlay(false);
```