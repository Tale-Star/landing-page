<script setup lang="ts">
import logoUrl from '@/assets/tale-star-mark.png'
</script>

<template>
  <a
    class="brand"
    href="#inicio"
    aria-label="Tale Star, ir al inicio"
  >
    <img
      :src="logoUrl"
      alt=""
      width="40"
      height="40"
    >
    <span>
      <strong>Tale Star</strong>
      <small>Creative Studio</small>
    </span>
  </a>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.brand img {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}

.brand strong {
  display: block;
  font-size: 17px;
}

.brand small {
  display: block;
  font-size: 11px;
  color: var(--text-3);
}
</style>
