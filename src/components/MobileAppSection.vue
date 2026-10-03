<script setup lang="ts">
// US96: punto de distribución de la app móvil (lectura de cuentos y AR).
import { links } from '@/config/links'
</script>

<template>
  <section
    id="app-movil"
    class="block block--flush-top"
  >
    <div class="wrap">
      <div class="band">
        <div>
          <span class="eyebrow">App móvil</span>
          <h2>Lleva tus cuentos al mundo real</h2>
          <p>
            Con la app móvil de Tale Star lees tus cuentos guardados de forma tradicional o en
            realidad aumentada, directamente en tu dispositivo.
          </p>
          <a
            class="btn band__btn"
            :href="links.mobileApp"
            target="_blank"
            rel="noopener"
          >
            Descargar la app móvil
          </a>
        </div>
        <div
          class="phone"
          aria-hidden="true"
        >
          <div class="phone__screen">
            <span class="phone__badge">Lectura AR</span>
            <div class="phone__book" />
            <div class="phone__floor" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  padding: 44px;
  border-radius: 28px;
  color: #fff;
  background: linear-gradient(135deg, #2d1b8f 0%, var(--ts-purple-900) 55%, var(--ts-purple-500) 100%);
}

.eyebrow {
  color: var(--ts-purple-100);
}

h2 {
  margin-top: 10px;
  font-size: 38px;
  line-height: 1.15;
  color: #fff;
}

p {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

.band__btn {
  color: var(--ts-purple-900);
  background: #fff;
}

.phone {
  justify-self: center;
  width: 220px;
  height: 400px;
  padding: 12px;
  border-radius: 34px;
  background: #141225;
  box-shadow: var(--shadow-lg);
}

.phone__screen {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(180deg, #a9b4f6, #e6b9d3);
}

.phone__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 700;
  color: var(--ts-purple-900);
  background: rgba(255, 255, 255, 0.85);
}

.phone__book {
  position: absolute;
  top: 110px;
  right: 22px;
  left: 22px;
  height: 150px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
  transform: perspective(500px) rotateX(28deg);
}

.phone__book::after {
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 50%;
  width: 1px;
  content: '';
  background: #ddd;
}

.phone__floor {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 120px;
  background:
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0 1px, transparent 1px 28px),
    rgba(91, 61, 250, 0.25);
}

@media (max-width: 820px) {
  .band {
    grid-template-columns: 1fr;
    padding: 32px 22px;
    text-align: center;
  }

  h2 {
    font-size: 28px;
  }

  .band__btn {
    width: 100%;
  }
}
</style>
