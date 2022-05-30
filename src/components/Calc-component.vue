<script lang="ts" setup>
defineProps<{
  open: boolean;
  transparent?: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <Teleport to="body" v-if="open">
    <div class="calc" @click="emit('close')" :class="{ transparent }"></div>
  </Teleport>
</template>

<style scoped lang="scss">
.calc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000005e;
  z-index: 1;
}

.transparent {
  background-color: transparent;
}
</style>
