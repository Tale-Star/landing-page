// Destinos de los CTA de la landing (US95, US96).
// Se configuran con variables VITE_* para no tocar código cuando la Web App y la app móvil tengan URL pública.

const DEFAULT_WEB_APP_URL = 'http://127.0.0.1:5173'
const DEFAULT_MOBILE_APP_URL = 'https://github.com/Tale-Star/frontend-mobile/releases'

const webAppUrl = (import.meta.env.VITE_WEB_APP_URL || DEFAULT_WEB_APP_URL).replace(/\/+$/, '')

export const links = {
  login: `${webAppUrl}/login`,
  register: `${webAppUrl}/register`,
  registerParent: `${webAppUrl}/register?segment=parent`,
  registerTeacher: `${webAppUrl}/register?segment=teacher`,
  mobileApp: import.meta.env.VITE_MOBILE_APP_URL || DEFAULT_MOBILE_APP_URL,
} as const

export const sections = [
  { id: 'segmentos', label: 'Para quién' },
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'app-movil', label: 'App móvil' },
] as const
