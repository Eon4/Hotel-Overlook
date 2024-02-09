import { useEffect, useState } from "react";
import style from "./header.module.scss";

// Functional component for the header with image slideshow
export const Header = () => {
  // State to store the list of images
  const [images, setImages] = useState(null);
  // State to track the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to control the fade effect between images
  const [fade, setFade] = useState(false);

  // Effect to fetch the list of images from the server on component mount
  useEffect(() => {
    // API endpoint for image list
    let url = "http://localhost:4000/imagelist";

    // Fetch image data from the server
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  // Effect to handle image slideshow and fade effect
  useEffect(() => {
    // Set up an interval for changing the image every 5 seconds
    const intervalId = setInterval(() => {
      // Trigger the fade effect
      setFade(true);

      // Delay to allow time for the fade effect before changing the image
      setTimeout(() => {
        // Update the current image index, looping back to the start if at the end
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );

        // Reset the fade effect
        setFade(false);
      }, 1000); // Adjust the duration of the fade effect
    }, 5000); // Change slide every 5 seconds

    // Clean up the interval when the component is unmounted or when the images change
    return () => clearInterval(intervalId);
  }, [images]);

  // Render component
  return (
    // Display the header container with the image or a loading message
    images ? (
      <div className={style.headerContainer}>
        <div
          // Apply styles for the header image, including the fade effect
          className={`${style.headerImage} ${fade ? style.fade : ""}`}
          // Set the background image dynamically based on the API response
          style={{
            backgroundImage: `url(${images[currentImageIndex]?.filename})`,
          }}
        />
      </div>
    ) : (
      // Display a loading message while fetching images
      <div>Loading...</div>
    )
  );
};
