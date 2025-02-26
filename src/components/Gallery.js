import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Gallery.css";

const Gallery = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzd5YMzDYkvlMttSe0JsRDEJ-VK3SEmG_7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M1YUxroCwOcc-sqGhOPqCF38VyXDT-_bRg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9FT-2x-dEC3H2IpkUmVETuH6iOzBsRzCrg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqM4WpHXNyVSBXVQrA_Y1Au_Snay6Kzk0xQ&s",
    "https://kavaretreat.com/wp-content/uploads/2018/09/WildlifePhotography.jpg",
    "https://www.africanmeccasafaris.com/wp-content/uploads/maraintrepidscampsmall3.jpg",
    "https://images.unsplash.com/photo-1548942719-33bc7c093437?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww",
    "https://www.shutterstock.com/image-photo/balloon-safari-maasai-mara-kenya-260nw-2194560075.jpg",
    "https://media.istockphoto.com/id/1416834065/photo/african-elephant-walking-with-tourist-car-stop-by-watching-during-sunset-at-masai-mara.jpg?s=612x612&w=0&k=20&c=OoRz5qTlXU4UTqhrXQ-c4bTO-avWBG-QE30iSOE_1Hg=",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gallery-container" id="gallery">
      <h2>Safari Adventure Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
