declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageview(path: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
}
