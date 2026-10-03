<script setup lang="ts">
// Ícono lineal de 24x24 (sin emojis), dibujado con trazos SVG.
defineProps<{ paths: readonly string[] }>()
</script>

<template>
  <span
    class="line-icon"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        v-for="d in paths"
        :key="d"
        :d="d"
      />
    </svg>
  </span>
</template>

<style scoped>
.line-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: var(--ts-purple-900);
  background: var(--accent-soft);
}

.line-icon svg {
  width: 22px;
  height: 22px;
}
</style>
