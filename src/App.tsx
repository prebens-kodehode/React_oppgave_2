import { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import ImageComponent from "./Components/ImageComponent/ImageComponent";
import { loadImages } from "./helper/loadImages";
import "./App.css";
import { Modal } from "./Components/Modal/Modal";

function App() {
  const [firstName, setFirstName] = useState("Anonymous");
  const [imageData, setImageData] = useState<Record<string, string>>({});

  useEffect(() => {
    (async () => {
      const images = await loadImages();
      setImageData(images);
    })();
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header firstName={firstName} />
        <main>
          <Carousel>
            {Object.entries(imageData).map(([key, src], index) => (
              <ImageComponent
                key={index}
                src={src}
                alt={key.replace(".webp", "")}
              />
            ))}
          </Carousel>
        </main>
        <footer></footer>
      </div>
      <Modal setFirstName={setFirstName} />
    </>
  );
}

export default App;
