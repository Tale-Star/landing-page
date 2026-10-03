<script setup lang="ts">
// US91: propuesta de valor y acceso por segmento.
</script>

<template>
  <section
    id="inicio"
    class="hero"
  >
    <div class="wrap hero__grid">
      <div>
        <span class="eyebrow">Contenido educativo infantil personalizado</span>
        <h1>Crea cuentos, imágenes y canciones <em>para enseñar lo que necesitas</em></h1>
        <p class="lead">
          Tale Star ayuda a padres, cuidadores y docentes a convertir un tema concreto en un cuento
          ilustrado, una imagen o una canción para niños, sin buscar en diez sitios distintos y con
          el adulto siempre en control del contenido.
        </p>
        <div class="hero__ctas">
          <a
            class="btn btn-primary"
            href="#padres"
          >Soy padre o cuidador</a>
          <a
            class="btn btn-ghost"
            href="#docentes"
          >Soy docente</a>
        </div>
        <p class="hero__note">
          Un mismo producto para ambos: tú revisas y decides antes de que el niño lo vea.
        </p>
      </div>

      <div
        class="visual"
        aria-hidden="true"
      >
        <div class="card preview">
          <div class="preview__head">
            <div>
              <strong>Vista previa</strong>
              <small>Cuento · Página 3 de 6</small>
            </div>
            <span class="eyebrow preview__status">Generado</span>
          </div>
          <div class="scene">
            <div class="scene__sun" />
            <div class="scene__hill" />
            <div class="scene__ground" />
            <div class="scene__caption">
              “Luna descubrió que la Tierra gira alrededor del Sol.”
            </div>
          </div>
          <div class="preview__actions">
            <span>Regenerar</span>
            <span>Editar texto</span>
            <span>Guardar</span>
          </div>
        </div>
        <div class="chip chip--song">
          <i>♪</i>Canción lista para la clase
        </div>
        <div class="chip chip--saved">
          <i>✓</i>Guardado en Biblioteca
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 72px 0 88px;
  background:
    radial-gradient(1200px 600px at 85% 20%, rgba(153, 116, 254, 0.55), transparent 60%),
    linear-gradient(135deg, #f3efff 0%, #e9e0ff 45%, #cdb8ff 100%);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

h1 {
  margin: 14px 0 18px;
  font-size: 54px;
  line-height: 1.08;
}

h1 em {
  font-style: normal;
  color: transparent;
  background: linear-gradient(90deg, var(--ts-purple-900), var(--ts-purple-500));
  -webkit-background-clip: text;
  background-clip: text;
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__note {
  margin-top: 16px;
  font-size: 13px;
  color: var(--text-3);
}

.visual {
  position: relative;
}

.preview {
  padding: 18px;
}

.preview__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.preview__head strong {
  font-size: 15px;
}

.preview__head small {
  display: block;
  font-size: 12px;
  color: var(--text-3);
}

.preview__status {
  font-size: 10px;
}

.scene {
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, #a9b4f6 0%, #c9b7ef 45%, #e6b9d3 100%);
}

.scene__sun {
  position: absolute;
  top: 46px;
  right: 70px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #fff4bd;
  box-shadow: 0 0 40px rgba(255, 244, 189, 0.9);
}

.scene__hill {
  position: absolute;
  right: -10%;
  bottom: -120px;
  left: -10%;
  height: 260px;
  border-radius: 50% 50% 0 0;
  background: #5b7563;
}

.scene__ground {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70px;
  background: #e3a7a6;
}

.scene__caption {
  position: absolute;
  bottom: 18px;
  left: 50%;
  padding: 9px 14px;
  border-radius: 12px;
  font-size: 12px;
  white-space: nowrap;
  color: var(--text-2);
  background: rgba(255, 255, 255, 0.88);
  transform: translateX(-50%);
}

.preview__actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 12px;
}

.preview__actions span {
  display: grid;
  place-items: center;
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-2);
  background: #fff;
}

.preview__actions span:last-child {
  border: 0;
  color: #fff;
  background: linear-gradient(90deg, var(--ts-purple-700), var(--ts-purple-500));
}

.chip {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 600;
  background: #fff;
  box-shadow: var(--shadow-md);
}

.chip i {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  font-size: 13px;
  font-style: normal;
  color: var(--ts-purple-900);
  background: var(--accent-soft);
}

.chip--song {
  top: 70px;
  left: -34px;
}

.chip--saved {
  right: -26px;
  bottom: 134px;
}

@media (max-width: 820px) {
  .hero {
    padding: 44px 0 60px;
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  h1 {
    font-size: 36px;
  }

  .hero__ctas .btn {
    flex: 1 1 100%;
  }

  .scene {
    height: 220px;
  }

  .scene__caption {
    max-width: 92%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chip--song {
    top: 84px;
    left: -6px;
  }

  .chip--saved {
    right: -6px;
    bottom: 130px;
  }
}
</style>
