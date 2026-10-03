<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'

const steps = [
  { title: 'Configura', text: 'Elige el formato y define personajes, escenario y lo que quieres enseñar.' },
  { title: 'Genera', text: 'Tale Star crea la ilustración, la página o la canción a partir de tu configuración.' },
  { title: 'Revisa y ajusta', text: 'Edita el texto o regenera hasta que el resultado sea el adecuado.' },
  { title: 'Guarda y reutiliza', text: 'Todo queda en tu Biblioteca para usarlo otra vez cuando lo necesites.' },
] as const
</script>

<template>
  <section
    id="como-funciona"
    class="block block--flush-top"
  >
    <div class="wrap">
      <SectionHeading
        eyebrow="Cómo funciona"
        title="De una idea a un recurso listo en cuatro pasos"
      />
      <ol class="steps">
        <li
          v-for="(s, i) in steps"
          :key="s.title"
          class="card step"
        >
          <span class="step__number">{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.step {
  padding: 24px;
}

.step__number {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(90deg, var(--ts-purple-900), var(--ts-purple-500));
}

h3 {
  margin: 14px 0 6px;
  font-size: 17px;
}

p {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--text-2);
}

@media (max-width: 820px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
