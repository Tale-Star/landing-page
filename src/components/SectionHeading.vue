<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead?: string
}>()
</script>

<template>
  <div class="section-heading">
    <span class="eyebrow">{{ eyebrow }}</span>
    <h2>{{ title }}</h2>
    <p
      v-if="lead"
      class="lead"
    >
      {{ lead }}
    </p>
  </div>
</template>

<style scoped>
.section-heading {
  max-width: 720px;
  margin: 0 auto 44px;
  text-align: center;
}

h2 {
  margin-top: 10px;
  font-size: 38px;
  line-height: 1.15;
}

@media (max-width: 820px) {
  h2 {
    font-size: 28px;
  }
}
</style>
