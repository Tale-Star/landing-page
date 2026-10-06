<script setup lang="ts">
import BrandLogo from '@/components/BrandLogo.vue'
import { links } from '@/config/links'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__grid">
      <div class="footer__brand">
        <BrandLogo />
        <p>Cuentos, imágenes y canciones personalizadas para el aprendizaje de los niños.</p>
      </div>
      <nav aria-label="Producto">
        <h4>Producto</h4>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#app-movil">App móvil</a>
      </nav>
      <nav aria-label="Para quién">
        <h4>Para quién</h4>
        <a href="#padres">Padres y cuidadores</a>
        <a href="#docentes">Docentes</a>
      </nav>
      <nav aria-label="Cuenta">
        <h4>Cuenta</h4>
        <a
          v-if="links.login"
          :href="links.login"
        >Iniciar sesión</a>
        <span
          v-else
          aria-disabled="true"
          title="Acceso web próximamente"
        >Iniciar sesión · Próximamente</span>
        <a
          v-if="links.register"
          :href="links.register"
        >Crear cuenta</a>
        <span
          v-else
          aria-disabled="true"
          title="Acceso web próximamente"
        >Crear cuenta · Próximamente</span>
      </nav>
    </div>
    <div class="wrap footer__legal">
      © {{ year }} Tale Star · Proyecto académico — UPC, Ingeniería de Software
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 88px;
  padding: 56px 0 40px;
  border-top: 1px solid var(--border);
  background: #fff;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 32px;
}

.footer__brand p {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-3);
}

h4 {
  margin: 0 0 12px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

nav a {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--text-2);
}

nav a:hover {
  color: var(--ts-purple-900);
}

nav span[aria-disabled="true"] {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--text-3);
}

.footer__legal {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--text-3);
}

@media (max-width: 820px) {
  .footer {
    margin-top: 60px;
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}
</style>
