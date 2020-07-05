<template>
  <v-overlay z-index="500">
    <v-progress-circular indeterminate :size="size"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "32",
    },
  },
};
</script>
