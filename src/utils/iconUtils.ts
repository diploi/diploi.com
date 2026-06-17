import { parseRepositoryUrl } from './apiUtils';

const MAX_ICON_BASE64_CHARS = 50_000; // ~37.5 KB decoded SVG

export function iconSrc(base64: string | null | undefined, repositoryUrl: string | null | undefined): string | undefined {
  if (base64 && base64.length <= MAX_ICON_BASE64_CHARS) {
    return `data:image/svg+xml;base64,${base64}`;
  }

  if (!repositoryUrl) return undefined;

  const parsed = parseRepositoryUrl(repositoryUrl);
  if (parsed.status !== 'ok') return undefined;

  const ref = parsed.ref ?? 'main';
  return `https://diploi.b-cdn.net/component/${parsed.owner}/${parsed.repo}/icon.svg?ref=${ref}`;
}
