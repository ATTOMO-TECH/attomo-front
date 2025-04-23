export function isExternalLink(url: string): boolean {
  return /^https?:\/\//.test(url);
}
