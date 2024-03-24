import React, { useState } from "react";
import "./App.css"; // Make sure to import your CSS file

function ImageBrowser() {
  const [currentImage, setCurrentImage] = useState(
    "https://picsum.photos/id/1/350/350"
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      id: 1,
      url: "https://picsum.photos/id/1/350/350",
      thumbnailUrl: "https://picsum.photos/id/1/50/50",
    },
    {
      id: 2,
      url: "https://picsum.photos/id/2/350/350",
      thumbnailUrl: "https://picsum.photos/id/2/50/50",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/3/350/350",
      thumbnailUrl: "https://picsum.photos/id/3/50/50",
    },
    {
      id: 4,
      url: "https://picsum.photos/id/4/350/350",
      thumbnailUrl: "https://picsum.photos/id/4/50/50",
    },
    {
      id: 5,
      url: "https://picsum.photos/id/5/350/350",
      thumbnailUrl: "https://picsum.photos/id/5/50/50",
    },
    {
      id: 6,
      url: "https://picsum.photos/id/6/350/350",
      thumbnailUrl: "https://picsum.photos/id/6/50/50",
    },
    {
      id: 7,
      url: "https://picsum.photos/id/7/350/350",
      thumbnailUrl: "https://picsum.photos/id/7/50/50",
    },
    {
      id: 8,
      url: "https://picsum.photos/id/8/350/350",
      thumbnailUrl: "https://picsum.photos/id/8/50/50",
    },
    {
      id: 9,
      url: "https://picsum.photos/id/9/350/350",
      thumbnailUrl: "https://picsum.photos/id/9/50/50",
    },
    {
      id: 10,
      url: "https://picsum.photos/id/10/350/350",
      thumbnailUrl: "https://picsum.photos/id/10/50/50",
    },
    {
      id: 11,
      url: "https://picsum.photos/id/11/350/350",
      thumbnailUrl: "https://picsum.photos/id/11/50/50",
    },
    {
      id: 12,
      url: "https://picsum.photos/id/12/350/350",
      thumbnailUrl: "https://picsum.photos/id/12/50/50",
    },
    {
      id: 13,
      url: "https://picsum.photos/id/13/350/350",
      thumbnailUrl: "https://picsum.photos/id/13/50/50",
    },
    {
      id: 14,
      url: "https://picsum.photos/id/14/350/350",
      thumbnailUrl: "https://picsum.photos/id/14/50/50",
    },
    {
      id: 15,
      url: "https://picsum.photos/id/15/350/350",
      thumbnailUrl: "https://picsum.photos/id/15/50/50",
    },
    {
      id: 16,
      url: "https://picsum.photos/id/16/350/350",
      thumbnailUrl: "https://picsum.photos/id/16/50/50",
    },
    {
      id: 17,
      url: "https://picsum.photos/id/17/350/350",
      thumbnailUrl: "https://picsum.photos/id/17/50/50",
    },
    {
      id: 18,
      url: "https://picsum.photos/id/18/350/350",
      thumbnailUrl: "https://picsum.photos/id/18/50/50",
    },
    {
      id: 19,
      url: "https://picsum.photos/id/19/350/350",
      thumbnailUrl: "https://picsum.photos/id/19/50/50",
    },
    {
      id: 20,
      url: "https://picsum.photos/id/20/350/350",
      thumbnailUrl: "https://picsum.photos/id/20/50/50",
    },
  ];

  const setImage = (index) => {
    setCurrentImageIndex(index);
 };

 const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
 };

 const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
 };

 return (
    <div className="container">
      <div className="image-navigation">
        <button onClick={prevImage} disabled={currentImageIndex === 0}>Previous</button>
        <img src={images[currentImageIndex].url} className="img-fluid" alt="Selected Image" />
        <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>Next</button>
      </div>
      <div className="small-images">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            onClick={() => setImage(index)}
            className="img-thumbnail"
          />
        ))}
      </div>
    </div>
 );
}

export default ImageBrowser;