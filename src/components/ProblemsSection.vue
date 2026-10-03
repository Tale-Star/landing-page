<script setup lang="ts">
import LineIcon from '@/components/LineIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'

const problems = [
  {
    title: 'Búsquedas dispersas',
    text: 'En lugar de revisar varios sitios y videos, creas el recurso directamente a partir del tema que quieres explicar.',
    icon: ['M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z', 'm20 20-3.5-3.5'],
  },
  {
    title: 'Contenido genérico',
    text: 'Defines personajes, escenarios, edad y estilo para que el material responda a tu objetivo, no a uno general.',
    icon: ['M4 7h16M4 12h10M4 17h7'],
  },
  {
    title: 'Adulto en control',
    text: 'Revisas, editas o regeneras todo antes de usarlo. El niño solo ve lo que tú apruebas.',
    icon: ['M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z'],
  },
] as const
</script>

<template>
  <section class="block">
    <div class="wrap">
      <SectionHeading
        eyebrow="¿Por qué Tale Star?"
        title="Menos tiempo buscando, más tiempo acompañando"
        lead="Encontrar material que encaje con el tema, la edad y el contexto del niño suele obligar a revisar y adaptar muchos recursos."
      />
      <div class="problems">
        <article
          v-for="p in problems"
          :key="p.title"
          class="card"
        >
          <LineIcon :paths="p.icon" />
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problems {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  padding: 26px;
}

h3 {
  margin: 16px 0 8px;
  font-size: 19px;
}

p {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-2);
}

@media (max-width: 820px) {
  .problems {
    grid-template-columns: 1fr;
  }
}
</style>
