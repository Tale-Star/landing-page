<script setup lang="ts">
// US92 (padres y cuidadores) y US93 (docentes): un CTA por segmento.
import SectionHeading from '@/components/SectionHeading.vue'
import { links } from '@/config/links'

const segments = [
  {
    id: 'padres',
    tag: 'Padres y cuidadores',
    title: 'Explica cualquier tema con una historia hecha para tu hijo',
    text: 'Cuando necesitas reforzar algo en casa, creas un recurso a la medida en pocos pasos.',
    points: [
      'Crea cuentos, imágenes y canciones sobre lo que quieres enseñar.',
      'Personaliza personajes, escenarios y nivel según la edad.',
      'Supervisión adulta: Modo infantil protegido con PIN.',
    ],
    cta: 'Empezar como padre o cuidador',
    href: links.registerParent,
    variant: '',
  },
  {
    id: 'docentes',
    tag: 'Docentes',
    title: 'Prepara material para tu clase sin depender de varias herramientas',
    text: 'Una herramienta complementaria: tu criterio pedagógico decide qué se usa y cómo.',
    points: [
      'Genera cuentos página por página, imágenes y canciones cortas.',
      'Controla el texto y el contenido antes de llevarlo al aula.',
      'Guarda y reutiliza tus recursos y personajes en la Biblioteca.',
    ],
    cta: 'Empezar como docente',
    href: links.registerTeacher,
    variant: 'segment--teacher',
  },
] as const
</script>

<template>
  <section
    id="segmentos"
    class="block block--flush-top"
  >
    <div class="wrap">
      <SectionHeading
        eyebrow="Para quién es"
        title="Pensado para quienes enseñan a niños"
      />
      <div class="segments">
        <article
          v-for="s in segments"
          :id="s.id"
          :key="s.id"
          class="card segment"
          :class="s.variant"
        >
          <span class="segment__tag">{{ s.tag }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <ul>
            <li
              v-for="point in s.points"
              :key="point"
            >
              <b aria-hidden="true">✓</b>{{ point }}
            </li>
          </ul>
          <a
            v-if="s.href"
            class="btn btn-primary"
            :href="s.href"
          >{{ s.cta }}</a>
          <button
            v-else
            class="btn btn-primary"
            type="button"
            disabled
            :aria-label="`${s.cta}: la aplicación web estará disponible próximamente`"
          >
            {{ s.cta }} · Próximamente
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.segments {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.segment {
  display: flex;
  flex-direction: column;
  padding: 32px;
}

.segment--teacher {
  background: linear-gradient(160deg, #fff 0%, #f4efff 100%);
}

.segment__tag {
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: var(--ts-purple-900);
  background: var(--accent-soft);
}

h3 {
  margin: 16px 0 10px;
  font-size: 26px;
}

p {
  margin: 0 0 18px;
  line-height: 1.6;
  color: var(--text-2);
}

ul {
  display: grid;
  gap: 10px;
  margin: 0 0 26px;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
}

li b {
  display: grid;
  flex: 0 0 22px;
  place-items: center;
  height: 22px;
  border-radius: 50%;
  font-size: 12px;
  color: var(--ts-purple-900);
  background: var(--ts-purple-100);
}

.segment .btn {
  align-self: flex-start;
  margin-top: auto;
}

.segment .btn:disabled {
  cursor: not-allowed;
  opacity: 0.62;
  box-shadow: none;
  transform: none;
}

@media (max-width: 820px) {
  .segments {
    grid-template-columns: 1fr;
  }

  .segment {
    padding: 26px 22px;
  }

  h3 {
    font-size: 22px;
  }

  .segment .btn {
    align-self: stretch;
    white-space: normal;
    text-align: center;
  }
}
</style>
