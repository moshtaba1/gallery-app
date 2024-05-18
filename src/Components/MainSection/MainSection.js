import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainSection.css";

export default function MainSection({subject}) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          params: { query: subject, per_page: 20 },
          headers: {
            Authorization: "Xtmd196v4b6uey7Raki3UrgNpG98uoXCzCyhrtZlBMd4LFsObk1tDbFs",
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images from Pexels", error);
      }
      setLoading(false);
    };

    fetchImages();
  }, [subject]);

  const downloadImage = (imageSrc) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-container">
      {loading ? (
        <div className="loading-container">
          <p>LOADING...</p>
        </div>
      ) : (
        <div className="main-img-wraper">
          {images.map((img) => (
            <div key={img.id} className="main-item">
              <div onClick={() => downloadImage(img.src.original)} className="img-icons">
                <img src="./assets/icons8-download-48.png" alt="download icon" />
              </div>
              <img src={img.src.medium} alt={img.alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
