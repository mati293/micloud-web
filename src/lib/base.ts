// Base path for the deployment. Empty in local dev; set to "/micloud-web"
// by the GitHub Pages build (project pages are served under a subpath).
export const SITE_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/** Prefix an absolute internal path or asset with the deployment base. */
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path
  return `${SITE_BASE}${path}`
}
