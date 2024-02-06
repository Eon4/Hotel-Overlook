import { useEffect, useState } from "react";
import style from "./header.module.scss";

export const Header = () => {
  const [images, setImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let url = "http://localhost:4000/imagelist";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log("Images:", images);

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    images ? (
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]?.filename})`,
        }}
        className={style.headerStyle}
      >
        {/* {console.log("Current Image Index in JSX:", currentImageIndex)} */}
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};
