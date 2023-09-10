export const loadImages = async () => {
  const imageModules = import.meta.glob("../assets/Images/*.webp");
  const images: Record<string, string> = {};

  for (const path in imageModules) {
    const module = (await imageModules[path]()) as { default: string };
    images[path.replace("../images/", "")] = module.default;
  }

  return images;
};
