/**
 * Base path for the app (e.g. /gene-burke-website on GitHub Pages, or "" when using custom domain at root).
 * Used so all navigation and links work whether deployed at a subpath or at domain root.
 */
export const basePath =
  (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || undefined;

/**
 * Full path for in-app navigation. Use for Link href, setLocation(), and <a href> to app routes.
 * Examples: pathFor("/") → "/gene-burke-website/" or "/", pathFor("/bio") → "/gene-burke-website/bio" or "/bio"
 */
export function pathFor(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return basePath ? `${basePath}${p}` : p;
}
