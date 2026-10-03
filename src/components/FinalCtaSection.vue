<script setup lang="ts">
// US95 (acceso a la Web App) y US96 (app móvil).
import { links } from '@/config/links'
</script>

<template>
  <section class="block block--flush-top final">
    <div class="wrap">
      <div class="cta">
        <span class="eyebrow">Empieza hoy</span>
        <h2>Crea tu primer recurso en minutos</h2>
        <p class="lead">
          Una sola cuenta para padres, cuidadores y docentes.
        </p>
        <div class="cta__row">
          <a
            class="btn btn-primary"
            :href="links.register"
          >Usar la app web</a>
          <a
            class="btn btn-soft"
            :href="links.mobileApp"
            target="_blank"
            rel="noopener"
          >
            Descargar la app móvil
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final {
  padding-bottom: 0;
}

.cta {
  padding: 64px 32px;
  border: 1px solid var(--border);
  border-radius: 28px;
  text-align: center;
  background: #fff;
  box-shadow: var(--shadow-sm);
}

h2 {
  margin: 10px 0 12px;
  font-size: 38px;
  line-height: 1.15;
}

.cta__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 26px;
}

@media (max-width: 820px) {
  .final {
    padding-bottom: 0;
  }

  .cta {
    padding: 44px 20px;
  }

  h2 {
    font-size: 28px;
  }

  .cta__row .btn {
    flex: 1 1 100%;
  }
}
</style>
