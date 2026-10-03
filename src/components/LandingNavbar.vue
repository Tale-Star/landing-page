<script setup lang="ts">
import { ref } from 'vue'
import BrandLogo from '@/components/BrandLogo.vue'
import { links, sections } from '@/config/links'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="nav">
    <div class="wrap nav__bar">
      <BrandLogo />

      <nav
        class="nav__links"
        aria-label="Secciones"
      >
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
        >{{ s.label }}</a>
      </nav>

      <div class="nav__actions">
        <a
          class="btn btn-ghost"
          :href="links.login"
        >Iniciar sesión</a>
        <a
          class="btn btn-primary"
          :href="links.register"
        >Crear cuenta</a>
      </div>

      <button
        class="nav__menu"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }" />
      </button>
    </div>

    <div
      v-show="menuOpen"
      id="mobile-menu"
      class="nav__drawer"
    >
      <div class="wrap">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          @click="closeMenu"
        >{{ s.label }}</a>
        <div class="nav__drawer-actions">
          <a
            class="btn btn-ghost"
            :href="links.login"
          >Iniciar sesión</a>
          <a
            class="btn btn-primary"
            :href="links.register"
          >Crear cuenta</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(248, 246, 255, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav__links {
  display: flex;
  gap: 28px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-2);
}

.nav__links a:hover {
  color: var(--ts-purple-900);
}

.nav__actions {
  display: flex;
  gap: 10px;
}

.nav__actions .btn {
  height: 42px;
  font-size: 14px;
}

.nav__menu {
  display: none;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
}

.nav__menu span {
  display: block;
  width: 18px;
  height: 14px;
  background: linear-gradient(
    var(--text) 0 2px,
    transparent 2px 6px,
    var(--text) 6px 8px,
    transparent 8px 12px,
    var(--text) 12px 14px
  );
}

.nav__menu span.open {
  height: 2px;
  background: var(--text);
}

.nav__drawer {
  border-top: 1px solid var(--border);
  background: #fff;
}

.nav__drawer .wrap {
  display: grid;
  gap: 4px;
  padding-top: 12px;
  padding-bottom: 20px;
}

.nav__drawer a:not(.btn) {
  padding: 12px 0;
  font-weight: 600;
  color: var(--text-2);
  border-bottom: 1px solid var(--border);
}

.nav__drawer-actions {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

@media (max-width: 820px) {
  .nav__links,
  .nav__actions {
    display: none;
  }

  .nav__menu {
    display: grid;
  }
}

@media (min-width: 821px) {
  .nav__drawer {
    display: none !important;
  }
}
</style>
