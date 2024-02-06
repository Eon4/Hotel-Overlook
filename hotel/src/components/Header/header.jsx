import { useEffect, useState } from "react";
import style from "./header.module.scss";

export const Header = () => {
  const [images, setImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let url = "http://localhost:4000/imagelist";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true); // Trigger the fade effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false); // Reset the fade effect
      }, 1000); // Adjust the duration of the fade effect
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    images ? (
      <div className={style.headerContainer}>
        <div
          className={`${style.headerImage} ${fade ? style.fade : ""}`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]?.filename})`,
          }}
        />
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};
