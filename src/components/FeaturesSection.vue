<script setup lang="ts">
// US94: capacidades del producto.
import LineIcon from '@/components/LineIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'

const features = [
  {
    title: 'Imágenes',
    text: 'Ilustraciones a partir de un prompt guiado o libre, con estilos visuales para niños.',
    where: 'Web',
    icon: ['M4 5h16v14H4z', 'm4 15 4-4 4 4 3-3 5 5', 'M17 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'],
  },
  {
    title: 'Cuentos',
    text: 'Construye historias página por página. Tú escribes el texto y decides cada escena.',
    where: 'Web',
    icon: ['M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z', 'M5 17a3 3 0 0 1 3-3h11'],
  },
  {
    title: 'Música',
    text: 'Canciones a partir de una dirección musical y una estructura con letra editable.',
    where: 'Web',
    icon: ['M9 18V5l11-2v13', 'M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z', 'M20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'],
  },
  {
    title: 'Biblioteca',
    text: 'Guarda, busca y reutiliza lo que creaste, y recupera la configuración original para regenerar.',
    where: 'Web',
    icon: ['M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'],
  },
  {
    title: 'Cuentos en realidad aumentada',
    text: 'Lee tus cuentos en el móvil y colócalos sobre una superficie real para vivirlos en AR.',
    where: 'App móvil',
    icon: ['M12 2 3 7v10l9 5 9-5V7z', 'm3 7 9 5 9-5M12 12v10'],
  },
] as const
</script>

<template>
  <section
    id="funcionalidades"
    class="block block--flush-top"
  >
    <div class="wrap">
      <SectionHeading
        eyebrow="Funcionalidades"
        title="Todo lo que necesitas para crear, en un solo lugar"
      />
      <div class="features">
        <article
          v-for="f in features"
          :key="f.title"
          class="card feature"
        >
          <LineIcon :paths="f.icon" />
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
          <span class="feature__where">{{ f.where }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.feature {
  grid-column: span 2;
  padding: 24px;
}

.feature:nth-child(4),
.feature:nth-child(5) {
  grid-column: span 3;
}

h3 {
  margin: 16px 0 6px;
  font-size: 18px;
}

p {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--text-2);
}

.feature__where {
  display: inline-block;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-3);
}

@media (max-width: 820px) {
  .features {
    grid-template-columns: 1fr;
  }

  .feature,
  .feature:nth-child(4),
  .feature:nth-child(5) {
    grid-column: auto;
  }
}
</style>
