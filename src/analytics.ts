const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const BING_UET_ID = import.meta.env.VITE_BING_UET_TAG_ID?.trim();

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    uetq: unknown[];
  }
}

function loadScript(src: string, id: string, async = true) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = async;
  document.head.appendChild(script);
}

export function initializeAnalytics() {
  if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { anonymize_ip: true });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`, 'ga4-script');
  }

  if (BING_UET_ID) {
    window.uetq = window.uetq || [];
    window.uetq.push('pageLoad');
    const script = document.createElement('script');
    script.id = 'bing-uet-script';
    script.innerHTML = `window.uetq = window.uetq || []; window.uetq.push('set', { 'pid': { 'uetq': '${BING_UET_ID}' } });`;
    document.head.appendChild(script);
    loadScript('https://bat.bing.com/bat.js', 'bing-uet-loader');
  }
}

export function trackEvent(name: string, parameters: Record<string, string> = {}) {
  window.gtag?.('event', name, parameters);
}

export function initializeConversionTracking() {
  document.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
    if (!link) return;

    const href = link.href;
    if (href.includes('api.whatsapp.com') || href.includes('wa.me')) {
      trackEvent('whatsapp_click', { link_url: href, link_id: link.id || 'unassigned' });
    } else if (href.startsWith('tel:')) {
      trackEvent('phone_click', { link_url: href });
    } else if (href.includes('google.com/maps')) {
      trackEvent('map_click', { link_url: href });
    }
  }, { passive: true });
}
