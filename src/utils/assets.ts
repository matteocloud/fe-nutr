export const getAssetUrl = (relativePath: string): string => {
  const base = import.meta.env.BASE_URL ?? "/";
  const path = relativePath.replace(/^\/+/, "");
  return `${base}${path}`;
};
