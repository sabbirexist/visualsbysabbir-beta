export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function gdriveToPreview(url: string) {
  // Supports: https://drive.google.com/file/d/<ID>/view?...
  const match = url.match(/\/file\/d\/([^/]+)\//);
  const id = match?.[1];
  if (!id) return url;
  return `https://drive.google.com/file/d/${id}/preview`;
}
