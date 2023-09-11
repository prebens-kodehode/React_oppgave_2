export const loadImages = async () => {
  // importing all .webp images from the specified directory
  const imageModules = import.meta.glob("../assets/Images/*.webp");

  const animalFacts: Record<string, string> = {
    bear: "Bears have an excellent sense of smell, better than dogs or possibly any other mammal.",
    bee: "Bees can recognize human faces, a trait known as configural processing.",
    butterfly:
      "Butterflies taste with their feet to find out whether the leaf they sit on is good to lay eggs on to be their caterpillars' food.",
    chameleon:
      "Chameleons can move their eyes in two directions at the same time.",
    cow: "Cows have best friends and get stressed when separated from them.",
    ducks: "Ducks have three eyelids to keep their eyes moist and protected.",
    eagle:
      "Eagles have a 360-degree field of view due to the positioning of their eyes.",
    elephant:
      "Elephants can communicate with each other using infrasound, a sound that is below the human hearing range.",
    goose: "Geese have teeth on their tongues.",
    hermitcrab:
      "Hermit crabs are known to form vacancy chains to exchange shells when they grow.",
    llama:
      "Llamas have an excellent sense of sight, smell, and hearing which helps them protect themselves in the wild.",
    monkey: "Monkeys can understand written numbers and can even count.",
    puffin: "Puffins use their tongues to catch dozens of fish at a time.",
    python:
      "Pythons have tiny spurs, which are essentially remnants of their ancient ancestors' legs.",
    tiger: "Tigers have striped skin, not just striped fur.",
  };

  // empty object to hold the image sources and facts
  const images: Record<string, { src: string; fact: string }> = {};

  for (const path in imageModules) {
    // extracting the animal name from the file path
    const animalName = path
      .replace("../assets/Images/", "")
      .replace(".webp", "");
    // importing the specific module for the current path (to get the default export which is the image src)
    const module = (await imageModules[path]()) as { default: string };

    // adding a new property to the images object with the animal name as the key and an object with src and fact as the value
    images[animalName] = { src: module.default, fact: animalFacts[animalName] };
  }
  return images;
};
