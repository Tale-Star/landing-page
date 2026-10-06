// Destinos de los CTA de la landing (US95, US96). En producción solo se habilitan
// cuando existe una URL HTTP(S) pública configurada; nunca se envía al visitante a localhost.
const DEVELOPMENT_WEB_APP_URL = 'http://127.0.0.1:5173'

function normalizeDestination(value: string | undefined, allowLocal: boolean): string | null {
  const candidate = value?.trim()
  if (!candidate) return null

  try {
    const url = new URL(candidate)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null

    const hostname = url.hostname.toLowerCase()
    const isLocalHost = hostname === 'localhost'
      || hostname.endsWith('.localhost')
      || hostname === '127.0.0.1'
      || hostname === '::1'
      || hostname === '0.0.0.0'
    if (!allowLocal && isLocalHost) return null

    return candidate.replace(/\/+$/, '')
  } catch {
    return null
  }
}

const configuredWebAppUrl = normalizeDestination(import.meta.env.VITE_WEB_APP_URL, import.meta.env.DEV)
const webAppUrl = configuredWebAppUrl || (import.meta.env.DEV ? DEVELOPMENT_WEB_APP_URL : null)
const mobileAppUrl = normalizeDestination(import.meta.env.VITE_MOBILE_APP_URL, import.meta.env.DEV)

export const links = {
  login: webAppUrl ? `${webAppUrl}/login` : null,
  register: webAppUrl ? `${webAppUrl}/register` : null,
  registerParent: webAppUrl ? `${webAppUrl}/register?segment=parent` : null,
  registerTeacher: webAppUrl ? `${webAppUrl}/register?segment=teacher` : null,
  mobileApp: mobileAppUrl,
} as const

export const sections = [
  { id: 'segmentos', label: 'Para quién' },
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'app-movil', label: 'App móvil' },
] as const
