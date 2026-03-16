/**
 * Route path helper for in-app navigation.
 *
 * IMPORTANT:
 * - Wouter's <Router base="..."> already handles the base path.
 * - All routes, Link hrefs, and setLocation() calls should use app-relative paths like "/bio".
 *
 * This helper just normalizes a path to ensure it starts with "/".
 * The Router's `base` prop is responsible for prefixing with the correct base
 * (e.g. /gene-burke-website in GitHub Pages, or / for a custom domain).
 */
export function pathFor(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

// Expose basePath in case we need it for things like asset URLs in the future.
export const basePath =
  (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || undefined;
